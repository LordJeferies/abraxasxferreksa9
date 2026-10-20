import http from 'node:http';
import {readFile,mkdir,rename,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {priceCart,validateOrder} from '../shared/commerce.mjs';
import {checkMeasures,measurementSummary} from '../shared/measurements.ts';
const catalog=JSON.parse(await readFile(new URL('../shared/catalog.json',import.meta.url),'utf8'));
export function createApi({storeDir=new URL('./.data/',import.meta.url),origin='http://127.0.0.1:4199'}={}) {
 let queue=Promise.resolve();
 const serialize=fn=>{const next=queue.then(fn);queue=next.catch(()=>{});return next;};
 const file=new URL('orders.json',typeof storeDir==='string'?new URL('file://'+storeDir.replace(/\/$/,'')+'/'):storeDir);
 return http.createServer(async(req,res)=>{
  const send=(status,body)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','Access-Control-Allow-Origin':origin,'Vary':'Origin','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(body));};
  if(req.headers.origin&&req.headers.origin!==origin)return send(403,{error:'Origen no permitido.'});
  if(req.method==='OPTIONS'){res.writeHead(204,{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Headers':'Content-Type','Access-Control-Allow-Methods':'GET,POST,OPTIONS','Vary':'Origin'});res.end();return;}
  const path=new URL(req.url,'http://localhost').pathname;
  try{
   if(req.method==='GET'&&path==='/api/health')return send(200,{ok:true,mode:'demo',paymentsEnabled:false});
   if(req.method==='GET'&&path==='/api/products')return send(200,{products:catalog,mode:'demo'});
   if(req.method!=='POST'||!['/api/quote','/api/orders','/api/measurements'].includes(path))return send(404,{error:'Ruta no disponible.'});
   let body='';for await(const chunk of req){body+=chunk;if(Buffer.byteLength(body)>32768)return send(413,{error:'Solicitud demasiado grande.'});}
   let input;try{input=JSON.parse(body);}catch{return send(400,{error:'JSON no válido.'});}
   if(path==='/api/measurements'){const error=checkMeasures(input);if(error)throw new Error(error);return send(200,{...measurementSummary(input),demo:true,price:null,notice:'Solicitud geométrica. Confirmar medidas, material y disponibilidad con FerreKsa.'});}
   if(path==='/api/quote')return send(200,priceCart(catalog,input.items));
   validateOrder(input);const quote=priceCart(catalog,input.items);
   const order=await serialize(async()=>{await mkdir(new URL('.',file),{recursive:true});let orders=[];try{orders=JSON.parse(await readFile(file,'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
    const previous=orders.find(o=>o.idempotencyKey===input.idempotencyKey);if(previous){if(JSON.stringify(previous.lines)!==JSON.stringify(quote.lines)||previous.fulfillment!==input.fulfillment)throw new Error('La solicitud repetida tiene contenido diferente.');return previous;}
    const item={id:'DEMO-'+randomUUID(),idempotencyKey:input.idempotencyKey,status:'simulated',createdAt:new Date().toISOString(),fulfillment:input.fulfillment,...quote};orders.push(item);await writeFile(new URL('orders.tmp',new URL('.',file)),JSON.stringify(orders.slice(-1000),null,2));await rename(new URL('orders.tmp',new URL('.',file)),file);return item;});
   return send(201,order);
  }catch(e){return send(400,{error:e.message||'No fue posible procesar la simulación.'});}
 });
}
if(process.argv[1]===fileURLToPath(import.meta.url)){const port=Number(process.env.PORT||4201);const api=createApi({origin:process.env.FRONTEND_ORIGIN||'http://127.0.0.1:4199'});api.listen(port,'127.0.0.1',()=>console.log('API de demostración en http://127.0.0.1:'+port));}
