# Verificación de ABRAXAS FERREKSA 9

## Evidencia completada
- Auditoría local de versión 2 y repositorios 0/2/original con GitHub CLI; publicación anterior intacta.
- Figma: tokens versionados, Button con 8 variantes, Field y Product card; inicio/tienda/producto desktop/tablet/móvil; prototipo tienda→producto.
- TypeScript y compilación Vite pasan; 43 rutas físicas generadas con metadatos y 404.
- 3 pruebas automatizadas de comercio/API pasan: cálculos exactos en céntimos con precio manipulado ignorado; rechazo de cantidades/variantes/productos/duplicados; HTTP catálogo y pedidos, persistencia, idempotencia, origen no permitido y ausencia de ruta de pago.
- Navegador desktop 1440×1000: home, búsqueda «taladro», favorito, comparador, ficha, cambio de variante y carrito. 2 unidades de una variante + 1 de otra = USD 267,00; persistió al recargar.
- Navegador móvil 390×844: menú, tienda, compra simulada y comprobante sin pago por USD 267,00.
- Integración frontend→API local: compra de ejemplo de rodillo por USD 8,50; API guardó un pedido con estado simulated e importe 850 céntimos. No fue un mock de la respuesta HTTP.
- Cotizador móvil: material personalizado «Cable para instalación», 12,5 metros y nota; revisión y enlace wa.me/584123525139 con texto codificado correcto. No se envió mensaje a otra persona.
- WebGL: contexto activo y render de la pieza conceptual; controles presentes. Revisión de fallback estático y pausa/reduced-motion por diseño. Pruebas visuales adicionales de controles y pausa se registrarán al finalizar.
- Home móvil: ambos CTA dentro del primer viewport (fin ~589px a 390×844). Se detectó un desbordamiento en el texto del relato y se corrigió; verificación posterior requerida.

## Límites
No se han medido Core Web Vitals de campo p75, FPS en dispositivos físicos, ni Safari/iPhone reales. No se declara Lighthouse 90+ sin informe. La simulación no prueba pagos ni ventas. Cashea no está conectado. No hay modelo 3D de Luka/producto. La API de ejemplo es local y no está publicada en Pages.

## Capturas
home-desktop.png; home-mobile.png; checkout-mobile.png. Se actualizarán las capturas relevantes tras las correcciones finales. No equivalen a métricas de rendimiento.
