export function priceCart(catalog, items) {
 if(!Array.isArray(items)||items.length>50) throw new Error('Lista no válida: máximo 50 líneas.');
 const seen=new Set();
 const lines=items.map(x=>{const product=catalog.find(p=>p.id===x?.productId);if(!product)throw new Error('Producto no disponible en la demo.');if(!Number.isInteger(x.quantity)||x.quantity<1||x.quantity>99)throw new Error('Cantidad válida: de 1 a 99 unidades.');if(typeof x.variant!=='string'||!product.variants.includes(x.variant))throw new Error('Selecciona una variante válida.');const key=product.id+'|'+x.variant;if(seen.has(key))throw new Error('Hay líneas duplicadas.');seen.add(key);if(x.quantity>product.demoStock)throw new Error('La cantidad supera el stock de prueba.');return {productId:product.id,name:product.name,variant:x.variant,quantity:x.quantity,unitPriceCents:product.priceCents,totalCents:product.priceCents*x.quantity};});
 const subtotalCents=lines.reduce((a,x)=>a+x.totalCents,0);
 return {lines,subtotalCents,totalCents:subtotalCents,currency:'USD',demo:true,shippingCents:0,taxCents:0,notice:'Simulación: no incluye cálculo fiscal ni tarifas reales de envío.'};
}
export function validateOrder(input) {
 if(!input||!['retiro-demo','delivery-demo'].includes(input.fulfillment))throw new Error('Elige una modalidad de prueba.');
 if(input.confirmDemo!==true)throw new Error('Confirma que es una simulación.');
 if(typeof input.idempotencyKey!=='string'||!/^[a-zA-Z0-9-]{8,80}$/.test(input.idempotencyKey))throw new Error('Identificador de solicitud no válido.');
 if(!Array.isArray(input.items)||!input.items.length)throw new Error('Tu carrito está vacío.');
 return true;
}
