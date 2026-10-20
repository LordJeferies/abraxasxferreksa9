import {products} from '../data/catalog';
import {priceCart,validateOrder} from '../../shared/commerce.mjs';
import type {Line} from './store';
const api=(import.meta as any).env.VITE_API_URL as string|undefined;
export async function placeDemoOrder(items:Line[],fulfillment:string,idempotencyKey:string){const input={items,fulfillment,idempotencyKey,confirmDemo:true};validateOrder(input);if(api){const res=await fetch(api.replace(/\/$/,'')+'/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(input)});const data=await res.json();if(!res.ok)throw new Error(data.error||'No se pudo completar la prueba.');return data;}
const quote=priceCart(products,items);return {id:'DEMO-'+crypto.randomUUID().slice(0,8).toUpperCase(),status:'simulated',createdAt:new Date().toISOString(),fulfillment,...quote};}
export const getQuote=(lines:Line[])=>priceCart(products,lines);
