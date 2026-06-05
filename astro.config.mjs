// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ─────────────────────────────────────────────────────────────────────────────
// Despliegue en GitHub Pages — elegir UNA de las dos configuraciones:
//
//  A) PROJECT PAGE  → repo llamado "cv" (este caso por defecto).
//     URL final:  https://car7oskdr.github.io/cv/
//     Mantener `site` y `base` como están abajo.
//
//  B) USER PAGE     → repo llamado "car7oskdr.github.io".
//     URL final:  https://car7oskdr.github.io/
//     Dejar `site` y COMENTAR la línea de `base` (o ponerla en '/').
//
// Los assets (cv.pdf, favicon, foto) se referencian con `import.meta.env.BASE_URL`
// en el código, así que cambiar entre A y B aquí es suficiente.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://car7oskdr.github.io',
  base: '/cv', // ← COMENTAR esta línea para una User Page (opción B)
  vite: {
    plugins: [tailwindcss()],
  },
});
