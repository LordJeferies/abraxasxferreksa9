# ABRAXAS FERREKSA 9

Experiencia independiente de FerreKsa: React + TypeScript + Vite, catálogo editorial de demostración, carrito, checkout simulado, cotizaciones por WhatsApp y configurador de medidas Three.js/R3F bajo demanda. Las versiones anteriores se mantienen intactas.

## Empezar
```bash
npm ci
npm run dev -- --port 4199
```
Abrir http://127.0.0.1:4199/abraxasxferreksa9/.

```bash
npm test
npm run build
npm run preview -- --port 4199
```
Node 24 usado en desarrollo. Dependencias estables fijadas en lockfile. La ruta base es /abraxasxferreksa9/.

## Backend base
```bash
node backend/server.mjs
```
API en http://127.0.0.1:4201. Para conectarla al frontend, poner `VITE_API_URL=http://127.0.0.1:4201` en `.env.local` y reiniciar Vite. No subir .env.local. Ver [docs/BACKEND.md](docs/BACKEND.md).

GitHub Pages ejecuta el frontend en modo de demostración local. No puede ejecutar el servidor Node. El backend base está incluido y probado por separado; para hacerlo público necesita hosting de API y endurecimiento para producción.

## Contenido de ejemplo
`shared/catalog.json` contiene 9 ejemplos con SKU DEMO, precios en céntimos USD, variantes y stock simulado. Fotografías editoriales reutilizadas. Ningún precio o prestación de ejemplo acredita una oferta real. Sustituir por datos autorizados antes de habilitar ventas. `src/data/stores.ts` contiene las 3 sedes y horarios facilitados por el propietario.

## Páginas
Inicio; tienda; catálogo; 5 categorías; 9 subcategorías; 9 fichas; búsqueda; selección de ejemplo; favoritos; comparador; carrito; checkout; cotizaciones; Cashea; marcas; servicios; nosotros; sedes; contacto; preguntas; envíos/retiros; privacidad de demo; cambios/devoluciones pendientes; 404.

## Movimiento y 3D
Entrada tipográfica del hero, respuestas hover/foco, zoom de ficha, cabecera/resumen sticky y configurador de bloques, láminas y tubos huecos con giro, zoom, medidas, mm/cm/m y cálculo geométrico. Three se descarga solo al activar la vista 3D del cotizador. DPR limitado, render bajo demanda y fallback estático; pausa y prefers-reduced-motion respetados. No hay modelo GLB comercial ni de Luka.

Luka es guía de navegación local con imagen aprobada y mensajes por contexto. No es chatbot, no sigue ojos con rig y no se simula un modelo completo. Véase recursos y límites en docs.

## Cashea
CTA visible hacia página interna con explicación y consulta. No hay pago Cashea conectado ni enlace a tienda específica confirmado. No se inventan cuotas ni iniciales. Referencias oficiales en [docs/REFERENCIAS-Y-EFECTOS.md](docs/REFERENCIAS-Y-EFECTOS.md).

## Publicación
Repositorio independiente previsto: LordJeferies/abraxasxferreksa9. El flujo de GitHub Actions ejecuta pruebas, compila y publica dist/. Nunca publica backend/.data ni secretos. `scripts/seo.mjs` genera 43 rutas estáticas con título/descripción/canonical y 404 para rutas inexistentes. Las rutas se recargan directamente en Pages.

## Figma
Archivo: https://www.figma.com/design/IBSrbil70Ga1zjWFEPGxCH?node-id=109-404
Página ABRAXAS FERREKSA 9; componentes y tokens independientes. Inicio, tienda y producto en desktop/tablet/móvil. Registros de IDs en docs/figma-state.json y docs/figma-screens.json. La interfaz es editable; Figma no ejecuta el backend ni sustituye la aplicación WebGL. Los prototipos conectan pantallas principales.

## Pendiente para vender
Catálogo comercial, SKU/marcas/fotos autorizadas, impuestos, stock, políticas, servicio de entrega/retiro, backend de producción, autenticación administrativa, pasarela autorizada y modalidad Cashea. Modelado real y rig de Luka/productos para alcanzar animación 3D comparable a las imágenes publicitarias.

No se garantiza Lighthouse 90+ ni Core Web Vitals de campo sin mediciones. Las pruebas realizadas y sus límites se registran en docs/VERIFICACION.md.

Configurador: /cotizaciones#medidas-3d. La ficha del ejemplo de bloques ofrece acceso directo. Dimensiones configuradas se añaden a la lista y al texto de WhatsApp. Las formas y materiales son ejemplos, no un catálogo de corte a medida confirmado.

## Ampliación del alcance del PDF
Se incorporaron once referencias de hogar adicionales (20 en total), seis ideas de proyecto y tres guías completas. Las nuevas ilustraciones SVG son genéricas; precios y stock siguen siendo ejemplos. Véase docs/ALCANCE-PDF.md para la matriz de requisitos, contenido pendiente y referencias EPA. La versión 2 mantiene un cotizador 2D sin Three.js; la 9 ofrece 3D opcional para geometrías a medida.
