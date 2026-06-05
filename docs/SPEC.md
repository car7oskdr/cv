# CV Web — Carlos Vázquez Lara

> **Para Claude Code:** Este README es la especificación completa de un proyecto.
> Tu tarea es **construir un sitio web de CV personal** (one-page, responsivo, listo
> para producción) a partir del contenido y los requisitos que se describen abajo.
> Lee todo el documento antes de empezar. Al final hay un checklist de aceptación.

---

## 1. Objetivo

Crear la página web de currículum de un **DevOps / DevSecOps Engineer**. El sitio
debe verse profesional, cargar rápido, ser responsivo (mobile-first) y poder
desplegarse en **GitHub Pages** mediante un workflow de **GitHub Actions** (esto es
importante: el dueño del CV es DevOps, el propio deploy es parte del portafolio).

El tono visual: **técnico, limpio, moderno**, con modo oscuro por defecto y opción
de modo claro. Nada de plantillas genéricas recargadas.

---

## 2. Stack técnico (requerido)

- **Astro** como framework (estático, rápido, ideal para un CV).
- **Tailwind CSS** para estilos.
- **TypeScript** donde aplique.
- Iconos: `astro-icon` o SVG inline (sin dependencias pesadas).
- Sin backend, sin base de datos. 100% estático.
- Contenido en un archivo de datos único (`src/data/cv.ts` o `cv.json`) para que
  actualizar el CV sea editar un solo archivo, no tocar componentes.

Si Astro no estuviera disponible en el entorno, usar **HTML + CSS + JS vanilla**
en un solo proyecto bien estructurado, manteniendo el contenido separado en un
`data.js`/`data.json`.

---

## 3. Estructura del proyecto sugerida

```
cv-carlos/
├── src/
│   ├── data/cv.ts            # TODO el contenido del CV (fuente única de verdad)
│   ├── components/
│   │   ├── Header.astro       # nombre, título, contacto, foto
│   │   ├── Summary.astro      # resumen profesional
│   │   ├── Experience.astro   # timeline de experiencia
│   │   ├── Skills.astro       # skills agrupadas por categoría
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   └── ThemeToggle.astro  # dark/light
│   ├── layouts/Base.astro
│   └── pages/index.astro
├── public/
│   ├── cv.pdf                 # versión descargable (placeholder)
│   └── favicon.svg
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
└── README.md
```

---

## 4. Contenido del CV (fuente de verdad)

> Volcar esto tal cual en `src/data/cv.ts`. Los campos marcados con `// TODO`
> deben quedar como placeholder visible para que el dueño los confirme.

### 4.1 Datos personales / Header
- **Nombre:** Carlos Vázquez Lara
- **Título:** DevSecOps Engineer · Ingeniero en Sistemas Computacionales
- **Ubicación:** CDMX y área metropolitana
- **Email:** carlosvazquezlara7@gmail.com
- **Teléfono:** 55 7351 2829
- **LinkedIn:** car7os → `https://www.linkedin.com/in/car7os` // TODO confirmar URL exacta
- **GitHub:** [car7oskdr](https://github.com/car7oskdr)
- **Foto:** `public/profile.jpg` // TODO subir foto

### 4.2 Resumen profesional
> Trayectoria en TI desde 2007, enfocado en DevOps y Cloud desde 2022.
> DevSecOps / DevOps Engineer especializado en arquitectura **serverless**,
> **Infrastructure as Code (IaC)** y automatización de **CI/CD**, con foco en la
> modernización de sistemas legacy hacia arquitecturas **cloud-native**. Sólidos
> conocimientos en **AWS, Python** y herramientas de nueva generación como
> **Pulumi** y **uv**. Experiencia integrando trazabilidad de cambios (CMDB,
> Jira, Change Management) en pipelines automatizados.

### 4.3 Experiencia laboral (orden cronológico inverso)

**1. Qualtop / SYE Software** *(consultora)* // TODO confirmar nombre exacto de la consultora
- **Cargo:** DevSecOps Engineer
- **Periodo:** Febrero 2026 – Actualidad
- **Descripción:** Automatización de plataformas CI/CD y despliegues cloud sobre
  AWS. Especializado en Jenkins, GitLab CI, IaC (Serverless Framework / Pulumi /
  Terraform), automatización vía APIs REST y gobierno de configuración con CMDB.
  Integración de Jenkins, GitLab y Jira para trazabilidad de cambios, releases y
  despliegues. Networking cloud, contenedores (Docker/Podman), Linux y tooling en
  Python, Bash y Rust orientado a DevSecOps.
- **Logros / responsabilidades:**
  - Diseño del modelo de Configuration Items (CI) para CMDB: taxonomía, atributos
    y relaciones entre servicios, aplicaciones, infraestructura y pipelines.
  - Integración de CMDB con Jenkins, Jira y procesos de Change Management para
    trazabilidad de cambios y releases.
  - Definición de APIs y flujos de automatización para registrar y actualizar CIs
    a partir de eventos de CI/CD.

**2. Podemos Progresar** *(microfinanciera)*
- **Cargo:** DevOps / Backend Engineer
- **Periodo:** Mayo 2022 – Enero 2026
- **Logros principales:**
  - Desarrollo del framework **DSD (Deploy Stack Develop)** para el despliegue de
    stacks AWS aislados.
  - Desarrollo de framework de **tests end-to-end** para ejecutar pruebas
    automáticas en pipeline.
  - Diseño e implementación de arquitectura **VPC Peering Cross-Account** con
    Pulumi IaC.
  - Optimización de pipelines CI/CD, reduciendo los tiempos de desarrollo del
    equipo.
  - Diseño de scripts `sh` y Makefiles para optimizar procesos (instalación de
    repositorios, generación de layers para AWS Lambda, ejecución de tests).
- **Responsabilidades técnicas:**
  - Migración de sistema legacy hacia infraestructura serverless en AWS.
  - Desarrollo de funciones AWS Lambda.
  - Creación de documentación técnica.

**3. Mueblería Promociones Erika**
- **Cargo:** Desarrollo web y gestión de datos / Auxiliar de ventas
- **Periodo:** Febrero 2007 – Mayo 2022
- **Funciones:**
  - Desarrollo del sitio web de la mueblería (HTML, CSS, JS, GitHub).
  - Responsable de la base de datos de clientes y stock (Python, MySQL).
  - Auxiliar de gerente de ventas y atención a clientes.

### 4.4 Educación
- **Ingeniero en Sistemas Computacionales**
  Tecnológico de Estudios Superiores del Oriente del Estado de México (TESOEM)
  2017 – 2021

### 4.5 Idiomas
- **Español:** nativo
- **Inglés:** técnico avanzado en lectura · conversación en progreso (estudio continuo)

### 4.6 Habilidades técnicas (agrupar por categoría, con iconos)

- **Lenguajes:** Python, Go, Rust, Java, Bash
- **Cloud:** AWS
- **Contenedores:** Docker, Kubernetes, Podman
- **CI/CD:** GitLab CI, GitHub Actions, Jenkins
- **IaC:** Terraform, Pulumi, Serverless Framework
- **Bases de datos:** MySQL, PostgreSQL, DynamoDB
- **Sistemas operativos:** GNU/Linux, macOS, Windows
- **Control de versiones:** Git, GitHub, GitLab
- **Metodologías y prácticas:** Domain-Driven Design (DDD), Test-Driven
  Development (TDD), SOLID, Programación Orientada a Objetos, desarrollo de
  aplicaciones en la nube

### 4.7 Proyectos / Portafolio
- **jenkins-jobs-factory** — `https://github.com/car7oskdr/jenkins-jobs-factory`
  Factory de jobs de Jenkins. // TODO añadir 1 línea de descripción del proyecto

---

## 5. Diseño y UX

- **Layout:** una sola página con secciones ancladas y nav superior sticky
  (Sobre mí · Experiencia · Skills · Educación · Proyectos · Contacto).
- **Modo oscuro por defecto**, con toggle a modo claro (persistir en
  `localStorage` — está permitido en un proyecto local fuera del entorno de
  artefactos).
- **Paleta sugerida:** base gris-azulado oscuro (#0f172a / slate-900) con acento
  ámbar/dorado (#f59e0b) — guiño al color del CV original. Que el acento se use
  con mesura.
- **Tipografía:** una sans moderna para texto (Inter / Geist) y una mono para
  detalles técnicos (JetBrains Mono / Fira Code).
- **Experiencia como timeline** vertical con línea y puntos; cada empleo es una
  tarjeta con cargo, empresa, fechas y bullets.
- **Skills** en chips/badges agrupados por categoría, con icono de cada
  tecnología.
- **Botón "Descargar CV (PDF)"** visible en el header, apuntando a
  `/public/cv.pdf`.
- **Animaciones sutiles** al hacer scroll (fade/slide-in), nunca exageradas.
- **Accesibilidad:** contraste AA, navegación por teclado, `alt` en imágenes,
  `aria-label` en el toggle de tema.
- **SEO:** `<title>`, meta description, Open Graph y `lang="es"`. Datos
  estructurados JSON-LD de tipo `Person`.

---

## 6. Despliegue (GitHub Pages)

Incluir `.github/workflows/deploy.yml` que:
1. Se dispare en push a `main`.
2. Instale dependencias y haga `astro build`.
3. Publique el directorio `dist/` en GitHub Pages.

Configurar `astro.config.mjs` con `site` y `base` correctos para Pages
(p. ej. `base: '/cv-carlos/'` si es project page, o sin base si es repo
`car7oskdr.github.io`). Dejar comentado cómo cambiar entre ambos casos.

---

## 7. Calidad del código

- Componentes pequeños y reutilizables; nada de un solo archivo gigante.
- Cero contenido hardcodeado en los componentes: todo sale de `src/data/cv.ts`.
- Sin warnings de build. Lighthouse objetivo: 95+ en Performance, Accessibility,
  Best Practices y SEO.
- `README` del proyecto con instrucciones de `dev`, `build` y `deploy`.

---

## 8. Checklist de aceptación

- [ ] El sitio renderiza todas las secciones con el contenido de arriba.
- [ ] Todo el contenido vive en un único archivo de datos.
- [ ] Responsivo en móvil, tablet y desktop.
- [ ] Toggle dark/light funcional y persistente.
- [ ] Botón de descarga de PDF.
- [ ] Workflow de GitHub Actions para deploy en Pages.
- [ ] Los campos `// TODO` quedan visibles como placeholder para confirmar.
- [ ] Build sin errores y Lighthouse 95+.

---

## 9. Notas para el dueño (Carlos) — revisar antes de publicar

- Confirmar el **nombre exacto de la consultora** (en el PDF aparece como
  "SYEOSFTWARE", probablemente un typo de "SYE Software" o similar).
- Sustituir la **foto** y el **PDF descargable** reales.
- Confirmar la **URL de LinkedIn**.
- Añadir una **descripción breve** del repo `jenkins-jobs-factory` y, si es
  posible, 2–3 proyectos más para reforzar el portafolio.
- Opcional pero recomendado para reclutadores: añadir **métricas/impacto** en los
  logros (p. ej. "reducción de X% en tiempos de despliegue", "N stacks aislados
  desplegados"). Los números convierten responsabilidades en resultados.
