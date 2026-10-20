# Backend base de demostración

## Ejecución
Requiere Node 24 (o versión compatible con el proyecto).

```bash
npm ci
npm run dev -- --port 4199
```
En otra terminal dentro del proyecto:

```bash
node backend/server.mjs
```
Para usar la API desde el frontend, crear `.env.local` con `VITE_API_URL=http://127.0.0.1:4201` y reiniciar el servidor de frontend. El backend admite por defecto el origen `http://127.0.0.1:4199`; cambiar `FRONTEND_ORIGIN` si corresponde.

Sin VITE_API_URL, el sitio calcula la misma demo en el navegador y permite completar la compra sin servidor. GitHub Pages usa este modo. No hay cobro, cuenta de usuario ni reserva real.

## Contrato implementado
- GET /api/health: modo demo, pagos desactivados.
- GET /api/products: catálogo de prueba.
- POST /api/quote: acepta `{items:[{productId,variant,quantity}]}`; calcula precios desde el catálogo del servidor, ignorando precios enviados por el cliente.
- POST /api/orders: añade `fulfillment: retiro-demo | delivery-demo`, `confirmDemo:true`, `idempotencyKey` UUID/string de 8–80 caracteres.
- Respuesta: id DEMO, estado simulated, fecha, líneas validadas, precios en céntimos, subtotal, total y aviso de simulación.

## Persistencia y límites
Pedidos de ejemplo en backend/.data/orders.json (ignorado en Git). Escritura serial y reemplazo atómico; idempotencia por clave con rechazo si cambia el contenido; máximo 1000 registros de prueba. Sin PII, credenciales ni tarjetas. API vinculada a loopback 127.0.0.1 y CORS para un origen explícito. Límites de cuerpo 32 KB, 50 líneas, cantidades enteras de 1 a stock simulado (20) y variantes permitidas.

Esto es una base local de integración, NO un servidor listo para procesar ventas públicas. No exponerlo como backend comercial sin autenticación/autorización, control de abuso, base de datos transaccional, validación fiscal, disponibilidad real, registros, backups y revisión de seguridad.

## Paso a producción
1. Sustituir shared/catalog.json por catálogo real mediante adaptador: SKU, precio/currency, impuestos, stock, atributos, variantes e imágenes autorizadas.
2. Alojar API en un servicio con HTTPS y base de datos. GitHub Pages solo aloja el frontend. Mantener secretos en variables del servidor.
3. Revalidar precio y stock en servidor al crear pedido; usar transacciones para reservas e idempotencia duradera.
4. Crear integración comercial autorizada con pasarela/Cashea; procesar webhooks verificados, nunca aceptar estado pagado desde el navegador.
5. Aprobar envíos, retiros, privacidad, cambios/devoluciones y términos.
6. Incorporar autenticación y área administrativa solo con roles/permisos definidos. Esta entrega no tiene panel de administración ni usuarios.

## Calidad 3D
La imagen aprobada de Luka es la fuente visual. No existe un GLB de Luka ni de los productos. Para rig animado: modelado consistente del flexómetro, UV, materiales PBR, rig facial/corporal, animaciones de saludo/atención/celebración y exportación optimizada con KTX2/Draco o Meshopt. Objetivo de peso/calidad a validar con el asset real. No usar el perno conceptual como sustituto de un producto auténtico.
