// ─────────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE VERDAD del CV.
// Para actualizar el currículum, edita SOLO este archivo: ningún componente
// contiene texto hardcodeado.
//
// Los campos con `todo: true` se renderizan con una etiqueta visible «TODO»
// para que el dueño los confirme antes de publicar (ver sección 9 del README).
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  /** clave de icono inline en src/components/Icon.astro */
  icon: string;
  todo?: boolean;
}

export interface Job {
  company: string;
  /** aclaración corta entre paréntesis: «(consultora)» */
  note?: string;
  role: string;
  period: string;
  /** marca el empleo actual (nodo «activo» del pipeline) */
  current?: boolean;
  summary?: string;
  highlights?: string[];
  responsibilities?: string[];
  /** tecnologías destacadas del rol */
  stack?: string[];
  todo?: boolean;
}

export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export interface Project {
  name: string;
  url: string;
  description: string;
  todo?: boolean;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
  /** 0–100 para la barra de progreso */
  proficiency: number;
}

export const cv = {
  // ── 4.1 Datos personales ───────────────────────────────────────────────────
  name: 'Carlos Vazquez Lara',
  handle: 'car7os',
  title: 'DevSecOps Engineer',
  subtitle: 'Ingeniero en Sistemas Computacionales',
  location: 'CDMX y área metropolitana',
  availability: 'Disponible para nuevos retos',

  contact: [
    {
      label: 'Email',
      value: 'carlosvazquezlara7@gmail.com',
      href: 'mailto:carlosvazquezlara7@gmail.com',
      icon: 'mail',
    },
    {
      label: 'Teléfono',
      value: '55 7351 2829',
      href: 'tel:+525573512829',
      icon: 'phone',
    },
    {
      label: 'LinkedIn',
      value: 'in/car7os',
      href: 'https://www.linkedin.com/in/car7os',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      value: 'car7oskdr',
      href: 'https://github.com/car7oskdr',
      icon: 'github',
    },
  ] satisfies ContactItem[],

  // Foto de perfil (archivo en public/profile.jpg)
  photo: {
    src: 'profile.jpg',
    alt: 'Foto de Carlos Vazquez Lara',
  },

  // Versión descargable (archivo en public/cv.pdf)
  pdf: {
    href: 'cv.pdf',
  },

  // ── 4.2 Resumen profesional ─────────────────────────────────────────────────
  summary:
    'Trayectoria en TI desde 2007, enfocado en DevOps y Cloud desde 2022. ' +
    'DevSecOps / DevOps Engineer especializado en arquitectura serverless, ' +
    'Infrastructure as Code (IaC) y automatización de CI/CD, con foco en la ' +
    'modernización de sistemas legacy hacia arquitecturas cloud-native. Sólidos ' +
    'conocimientos en AWS, Python y herramientas de nueva generación como Pulumi y ' +
    'uv. Experiencia integrando trazabilidad de cambios (CMDB, Jira, Change ' +
    'Management) en pipelines automatizados.',

  summaryHighlights: ['Serverless', 'IaC', 'CI/CD', 'AWS', 'Cloud-native'],

  // ── 4.3 Experiencia (orden cronológico inverso) ─────────────────────────────
  experience: [
    {
      company: 'Qualtop / SYE Software',
      note: 'consultora · cliente BMV',
      role: 'DevSecOps Engineer',
      period: 'Febrero 2026 – Actualidad',
      current: true,
      summary:
        'Ingeniero DevSecOps especializado en AWS, CI/CD y seguridad de la cadena ' +
        'de suministro de software. Experiencia diseñando plataformas de ' +
        'automatización con Jenkins, GitLab CI e Infrastructure as Code (Terraform, ' +
        'Pulumi y Serverless Framework), integrando controles DevSecOps shift-left, ' +
        'SBOMs, análisis SAST/SCA y gobierno de configuración mediante CMDB. ' +
        'Sólidos conocimientos en Linux, contenedores, networking cloud, ' +
        'automatización con APIs REST y desarrollo de herramientas en Python, ' +
        'Bash y Rust.',
      highlights: [
        'Diseño e integración de CMDB con Jenkins, Jira y procesos de Change Management.',
        'Desarrollo de Shared Libraries y pipelines reutilizables para estandarizar builds, pruebas y despliegues.',
        'Implementación de controles DevSecOps automatizados con Quality Gates y políticas de seguridad.',
        'Automatización de registro y actualización de Configuration Items mediante eventos CI/CD y APIs.',
        'Diagnóstico y resolución de incidentes en pipelines, agentes, dependencias e infraestructura.',
        'Generación de SBOMs, evidencias de cumplimiento y métricas de entrega para auditoría y trazabilidad.',
      ],
      stack: [
        'Jenkins',
        'GitLab CI',
        'Terraform',
        'Pulumi',
        'CMDB',
        'SAST/SCA',
        'SBOM',
        'Python',
        'Rust',
      ],
    },
    {
      company: 'Podemos Progresar',
      note: 'microfinanciera',
      role: 'DevOps / Backend Engineer',
      period: 'Mayo 2022 – Enero 2026',
      highlights: [
        'Desarrollo del framework DSD (Deploy Stack Develop) para el despliegue de stacks AWS aislados.',
        'Desarrollo de framework de tests end-to-end para ejecutar pruebas automáticas en pipeline.',
        'Diseño e implementación de arquitectura VPC Peering Cross-Account con Pulumi IaC.',
        'Optimización de pipelines CI/CD, reduciendo los tiempos de desarrollo del equipo.',
        'Diseño de scripts sh y Makefiles para optimizar procesos (instalación de repositorios, generación de layers para AWS Lambda, ejecución de tests).',
      ],
      responsibilities: [
        'Migración de sistema legacy hacia infraestructura serverless en AWS.',
        'Desarrollo de funciones AWS Lambda.',
        'Creación de documentación técnica.',
      ],
      stack: ['AWS', 'Lambda', 'Pulumi', 'VPC', 'Python', 'Makefile'],
    },
    {
      company: 'Mueblería Promociones Erika',
      role: 'Desarrollo web y gestión de datos · Auxiliar de ventas',
      period: 'Febrero 2007 – Mayo 2022',
      responsibilities: [
        'Desarrollo del sitio web de la mueblería (HTML, CSS, JS, GitHub).',
        'Responsable de la base de datos de clientes y stock (Python, MySQL).',
        'Auxiliar de gerente de ventas y atención a clientes.',
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL'],
    },
  ] satisfies Job[],

  // ── 4.6 Habilidades técnicas ────────────────────────────────────────────────
  skills: [
    { category: 'Lenguajes', icon: 'code', items: ['Python', 'Go', 'Rust', 'Java', 'Bash'] },
    { category: 'Cloud', icon: 'cloud', items: ['AWS'] },
    { category: 'Contenedores', icon: 'container', items: ['Docker', 'Kubernetes', 'Podman'] },
    { category: 'CI/CD', icon: 'pipeline', items: ['GitLab CI', 'GitHub Actions', 'Jenkins'] },
    { category: 'IaC', icon: 'iac', items: ['Terraform', 'Pulumi', 'Serverless Framework'] },
    { category: 'Bases de datos', icon: 'database', items: ['MySQL', 'PostgreSQL', 'DynamoDB'] },
    { category: 'Sistemas operativos', icon: 'terminal', items: ['GNU/Linux', 'macOS', 'Windows'] },
    { category: 'Control de versiones', icon: 'git', items: ['Git', 'GitHub', 'GitLab'] },
    {
      category: 'Metodologías',
      icon: 'compass',
      items: ['DDD', 'TDD', 'SOLID', 'OOP', 'Cloud-native'],
    },
  ] satisfies SkillGroup[],

  // ── 4.4 Educación ───────────────────────────────────────────────────────────
  education: [
    {
      degree: 'Ingeniero en Sistemas Computacionales',
      school: 'Tecnológico de Estudios Superiores del Oriente del Estado de México (TESOEM)',
      period: '2017 – 2021',
    },
  ] satisfies EducationItem[],

  // ── 4.5 Idiomas ─────────────────────────────────────────────────────────────
  languages: [
    { name: 'Español', level: 'Nativo', proficiency: 100 },
    {
      name: 'Inglés',
      level: 'Técnico avanzado en lectura · conversación en progreso',
      proficiency: 70,
    },
  ] satisfies Language[],

  // ── 4.7 Proyectos / Portafolio ──────────────────────────────────────────────
  projectsIntro:
    'Herramientas que desarrollé para resolver necesidades reales en los ' +
    'equipos donde he trabajado, ahora publicadas como repositorios abiertos.',

  projects: [
    {
      name: 'jenkins-jobs-factory',
      url: 'https://github.com/car7oskdr/jenkins-jobs-factory',
      description:
        'CLI en Python (uv) para crear de forma declarativa folders y Multibranch ' +
        'Pipelines de Jenkins desde YAML vía API REST: defaults, idempotencia y ' +
        'escaneo automático de ramas.',
    },
  ] satisfies Project[],

  // ── Navegación (secciones ancladas) ─────────────────────────────────────────
  nav: [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'skills', label: 'Skills' },
    { id: 'educacion', label: 'Educación' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ],

  // ── SEO / metadatos ─────────────────────────────────────────────────────────
  meta: {
    lang: 'es',
    description:
      'CV de Carlos Vazquez Lara, DevSecOps Engineer especializado en AWS, ' +
      'serverless, Infrastructure as Code (Pulumi, Terraform) y automatización CI/CD.',
    keywords: 'DevSecOps, DevOps, AWS, Pulumi, Terraform, CI/CD, serverless, IaC',
  },
} as const;

export type CV = typeof cv;
