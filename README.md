# CV Web — Carlos Vázquez Lara

Sitio de currículum **one-page**, estático y responsivo, para un **DevSecOps Engineer**.
Construido con **Astro + Tailwind CSS + TypeScript**, con modo oscuro por defecto,
toggle a modo claro persistente y despliegue automático en **GitHub Pages** vía
GitHub Actions (el propio deploy es parte del portafolio).

**Concepto de diseño:** una *consola de ingeniería / pipeline de despliegue*.
Terminal refinada sobre slate profundo con acento ámbar, tipografías
**Bricolage Grotesque** (display) + **JetBrains Mono** (técnica). La experiencia se
lee como un pipeline CI/CD vertical y el footer simula una corrida de deploy.

---

## Requisitos

- Node.js ≥ 18 (probado con Node 24)
- npm

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo  → http://localhost:4321/cv
npm run build    # build estático          → dist/
npm run preview  # servir el build de producción localmente
```

---

## Editar el contenido del CV

Toda la información vive en **un único archivo**:

```
src/data/cv.ts        ← fuente única de verdad (texto, experiencia, skills, etc.)
```

Los componentes no tienen texto hardcodeado: renderizan desde `cv.ts`. Para
actualizar el CV basta con editar ese archivo.

Los campos marcados con `todo: true` (LinkedIn, nombre de la consultora, foto, PDF,
descripción de proyectos…) se muestran en el sitio con una **etiqueta visible
«TODO»** para recordar confirmarlos antes de publicar. Ver `docs/SPEC.md` §9.

### Assets a reemplazar (en `public/`)

| Archivo            | Estado     | Acción                                              |
| ------------------ | ---------- | --------------------------------------------------- |
| `public/cv.pdf`    | placeholder | Sustituir por el CV real en PDF                     |
| `public/profile.jpg` | falta      | Subir foto y activar el `<img>` comentado en `Header.astro` |
| `public/og.svg`    | branded    | Opcional: exportar a `og.png` 1200×630 para social  |

---

## Arquitectura

```
src/
├── data/cv.ts          # contenido (fuente única de verdad) + tipos
├── lib/url.ts          # helper asset() para respetar el `base` de Pages
├── layouts/Base.astro  # <head>, SEO/OG, JSON-LD Person, fuentes, tema anti-FOUC
├── components/
│   ├── Nav.astro          # nav sticky + descarga PDF + ThemeToggle
│   ├── Header.astro       # hero «consola» con nombre, contacto y CTAs
│   ├── Summary.astro      # resumen profesional
│   ├── Experience.astro   # timeline tipo pipeline CI/CD
│   ├── Skills.astro       # skills agrupadas por categoría
│   ├── Education.astro     # educación + idiomas
│   ├── Projects.astro     # portafolio
│   ├── Contact.astro      # contacto + footer «deploy run»
│   ├── Section.astro      # cabecera de sección reutilizable (// 01 — Título)
│   ├── Todo.astro         # etiqueta visible de campo pendiente
│   ├── Icon.astro         # iconos SVG inline (sin dependencias)
│   └── ThemeToggle.astro  # dark/light con persistencia en localStorage
├── styles/global.css    # tema (variables CSS → tokens Tailwind), animaciones
└── pages/index.astro    # composición de la página
```

**Tema:** variables CSS bajo `[data-theme]` se exponen como tokens de Tailwind
(`bg-bg`, `text-ink`, `text-accent`…), así que cambiar de tema reestiliza todo sin
duplicar clases. El tema se aplica antes del primer paint (sin parpadeo) leyendo
`localStorage`.

---

## Despliegue (GitHub Pages)

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) se dispara
en cada push a `main`: instala, hace `astro build` y publica `dist/` en Pages.

Antes del primer deploy, en **Settings → Pages**, elegir **Source: GitHub Actions**.

### Project Page vs User Page

En [`astro.config.mjs`](astro.config.mjs) elegir una configuración:

- **Project Page** (repo `cv`) → URL `https://car7oskdr.github.io/cv/`
  Mantener `site` y `base: '/cv'` (configuración por defecto).
- **User Page** (repo `car7oskdr.github.io`) → URL `https://car7oskdr.github.io/`
  Dejar `site` y **comentar** la línea de `base`.

Los assets se referencian con el helper `asset()` (`src/lib/url.ts`), así que cambiar
entre ambos casos solo requiere tocar `astro.config.mjs`.

---

## Especificación original

El documento de requisitos completo está en [`docs/SPEC.md`](docs/SPEC.md), incluido
el checklist de aceptación y las notas para el dueño.
