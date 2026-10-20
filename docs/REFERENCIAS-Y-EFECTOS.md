# Investigación y decisiones — 19 octubre 2026

## Referencias consultadas
- Marcus Lorenzet https://www.marcuslorenzet.com/ — escala editorial, jerarquía y proyectos. Tomamos claridad de composición; ninguna cifra o testimonio ajeno se incorpora.
- Visuvate https://www.visuvate.com/ y https://visuvate.com/services/ecommerce-website-design — arquitectura modular y recorrido comercial. La raíz sin www no respondió inicialmente en la herramienta; la versión www y sus páginas sí se consultaron.
- Awwwards https://www.awwwards.com/websites/e-commerce/ — intento de consulta agotó tiempo. No se atribuyen premios ni se declara un ranking 2026 verificado.
- Apple https://www.apple.com/airpods-pro/ — producto protagonista, detalle y CTA comprensible.
- Hilti https://www.hilti.com/ y Bosch Professional https://www.bosch-professional.com/gb/en/ — familias, navegación y consulta de producto industrial. No se implica relación comercial con FerreKsa.
- Three.js https://threejs.org/examples/#webgl_materials_physical_clearcoat y https://threejs.org/manual/pages/rendering-on-demand.html — materiales físicos y renderizado bajo demanda.
- Three.js https://threejs.org/manual/pages/responsive.html — resolución, coste GPU y tamaño adaptable.
- R3F https://r3f.docs.pmnd.rs/advanced/scaling-performance — carga diferida, invalidación y escalado. La versión estable de dependencias fue consultada en npm y fijada en package-lock.json.
- Vite https://vite.dev/guide/static-deploy.html — base por repositorio y despliegue estático.

## Cashea: evidencia y límite
Material del propietario muestra campañas Cashea. https://www.cashea.app/la-cosecha incluye Ferreksa, pero una campaña no verifica disponibilidad actual, inventario, tienda online específica ni API autorizada. https://intercom.help/cashea/es/articles/6198506-como-comprar-en-cashea y https://intercom.help/cashea/es/articles/8526404-compra-en-tienda-fisica-y-online describen compras presenciales y mediante su app. No se deducen cuotas, iniciales o condiciones de ese material. El CTA abre una página interna con consulta a FerreKsa y enlaces oficiales; no una pasarela falsa.

## Matriz de efectos
Los costes son presupuestos de diseño, no mediciones de hardware o FPS.

| Efecto | Aporte / lugar | Construcción | Coste previsto | Dispositivos |
|---|---|---|---|---|
| Entrada de titulares | Jerarquía del hero | Transform y opacidad por líneas, ~650 ms; sin bloquear CTAs | Bajo, sin bucle permanente | Ambos; apagado con reduced-motion o pausa |
| Estudio industrial 3D | Inspeccionar forma, acabado y luz | R3F/Three, perno conceptual, rosca continua, PBR/PMREM RoomEnvironment, sombras, pedestal | Medio/alto al cargar (~247 KB gzip del chunk Three), render bajo demanda; DPR máx. 1.35 | Ambos, opt-in, fallback estático |
| Respuesta al cursor en 3D | Inspección suave sin mover piezas sueltas | Giro acotado e interpolación del conjunto apoyado; slider de giro y zoom accesible | Medio durante interacción; sin bucle una vez estable | Desktop cursor; móvil controles |
| Hover editorial | Identificar contenido clicable | Escala 1.035 de fotos dentro de su marco + etiqueta Ver detalles | Bajo, transforms | Mouse; foco muestra la misma etiqueta |
| CTA con respuesta | Claridad al actuar | Color, borde y flecha 2px | Bajo | Ambos; movimiento desactivable |
| Ficha con zoom | Examinar imagen sin falso 360 | Botón con aria-pressed, escala delimitada | Bajo | Ambos |
| Galería con cambio de contexto | Producto e inspiración distinguibles | Estado React, imagen y alt separados | Bajo; no modifica identidad del producto | Ambos |
| Header y resumen sticky | Mantener navegación y total disponibles | CSS sticky; resumen vuelve al flujo en móvil | Bajo | Adaptativo |
| Carrito y feedback | Confirmar cambios | Estado persistente, aria-live y controles claros | Bajo | Ambos |
| Luka contextual | Atajos relevantes sin chat ficticio | Imagen aprobada recortada por contenedor CSS, panel local, mensajes por ruta y acciones, pausa persistente | Bajo, imagen se carga al abrir panel | Ambos |

## Decisiones de contención
No se despliega Lenis: scroll nativo y navegación por teclado bastan. No se usa cursor global que oculte el puntero, distorsión de producto, zoom infinito, scroll secuestrado ni despieces inventados. Los modelos comerciales 360 y Luka riggeado se activarán cuando haya modelos originales/licenciados de calidad. El perno conceptual no es producto a la venta. Las fotos cinematográficas existentes se reutilizan; esta iteración no altera sus especificaciones para simular un catálogo real.
