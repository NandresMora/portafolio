// ═══════════════════════════════════════════════════════════
// data.ts — Datos del portafolio de Andrés Mora
// Edita este archivo para personalizar tu información
// ═══════════════════════════════════════════════════════════

export const PERSONAL = {
    name: 'Andrés Mora',
    fullName: 'Andrés Mora Mateus',
    title: 'Ingeniero de Sistemas | Dev Jr',
    heroTitle: 'Desarrollador Web Jr ',
    heroHighlight: 'Ingeniero de Sistemas ',
    bio: 'Estudiante de ultimo semestre de Ingeniería de Sistemas con 4+ años en soporte TI y pasión por el desarrollo web. Combino conocimiento operativo real de infraestructura con habilidades de programación para crear soluciones alineadas al negocio.',
    location: 'Chía, Cundinamarca – Colombia',
    email: 'andres.mora.mateus@gmail.com',
    phone: '+57 312 360 2705',
    phoneHref: 'tel:+573123602705',
    linkedin: 'https://linkedin.com/in/andres-mora-it',
    linkedinLabel: 'linkedin.com/in/andres-mora-it',
    github: 'https://github.com/NandresMora?tab=overview&from=2026-01-01&to=2026-01-31',           // ← Actualiza con tu usuario
    githubLabel: 'github.com/NandresMora', // ← Actualiza con tu usuario
    available: true,
}

export const STATS = [
    { value: 3, suffix: '', label: 'Proyectos Web', icon: 'Rocket' },
    { value: 4, suffix: '+', label: 'Años en TI', icon: 'Briefcase' },
    { value: 700, suffix: '+', label: 'Equipos Gestionados', icon: 'MonitorCog' },
    { value: 1, suffix: '', label: 'Certificación ITIL v4', icon: 'Award' },
] as const

export const TECH_BADGES = [
    'JavaScript', 'Python', 'HTML / CSS', 'MySQL', 'APIs REST', 'Azure', 'n8n', 'ITIL v4',
]

// ─── Proyectos Web ─────────────────────────────────────────────────────
// Reemplaza los placeholders con tus proyectos web reales
export const WEB_PROJECTS = [
    {
        title: 'Sinnexys',
        description: 'Desarrollo de una página web para Sinnexys, una empresa de desarrollo y consultoría en TI.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
        role: 'Desarrollador Web',
        image: '/sinnexys.png',
        achievements: [
            'Diseño y desarrollo de una página web moderna y profesional para Sinnexys.',
            'Implementación de tecnologías modernas como React, TypeScript y Tailwind CSS.',
            'Creación de una experiencia de usuario intuitiva y atractiva.',
        ],
        link: 'https://www.sinnexys.dev',
    },
    {
        title: 'Contadores DyD',
        description: 'Desarrollo de una página web para Contadores DyD, una empresa de contabilidad y finanzas.',
        tech: ['Node.js', 'JavaScript', 'CSS'],
        role: 'Desarrollador Frontend',
        image: '/dydcontadores.jpg',
        achievements: [
            'Diseño y desarrollo de una página web moderna y profesional para Contadores DyD.',
            'Implementación de tecnologías modernas como Node.js, JavaScript y CSS.',
            'Creación de una experiencia de usuario intuitiva y atractiva.',
        ],
        link: 'https://dydcontadores.vercel.app/',
    },
    {
        title: 'SENA -ecommerce',
        description: 'Desarrollo de una página web para el SENA, una empresa de comercio electrónico.',
        tech: ['HTML', 'CSS', 'JavaScript', 'API REST'],
        role: 'Desarrollador Web',
        image: '/sena-ecommerce.png',
        achievements: [
            'Diseño y desarrollo de una página web moderna y profesional para el SENA.',
            'Implementación de tecnologías modernas como HTML, CSS y JavaScript.',
            'Creación de una experiencia de usuario intuitiva y atractiva.',
        ],
        link: 'https://github.com/johanjaguardev/SENA-ecommerce.git',
    },
]

// ─── Proyectos TI (del CV) ─────────────────────────────────────────────
export const IT_PROJECTS = [
    {
        title: 'Chatbot de Soporte N1',
        description:
            'Integrado con GLPI y Microsoft Teams para resolución automática de incidentes y escalamiento a mesa de ayuda.',
        tech: ['API REST', 'GLPI', 'Microsoft Teams'],
    },
    {
        title: 'Mesa de Ayuda ITSM con GLPI',
        description:
            'Instalación, configuración y parametrización completa de GLPI bajo buenas prácticas ITIL para gestión de incidentes.',
        tech: ['GLPI', 'ITIL v4', 'SLA'],
    },
    {
        title: 'Automatización de Procesos',
        description:
            'Interconexión de aplicaciones corporativas y consumo de APIs REST para optimizar flujos de trabajo.',
        tech: ['APIs REST', 'n8n', 'Automatización'],
    },
]

// ─── Stack Tecnológico ─────────────────────────────────────────────────
export const SKILLS = [
    {
        title: 'Desarrollo & Scripting',
        icon: 'Code2',
        color: 'blue',
        skills: ['JavaScript', 'Python', 'HTML/CSS', 'APIs REST'],
    },
    {
        title: 'Bases de Datos',
        icon: 'Database',
        color: 'emerald',
        skills: ['MySQL', 'SQL', 'Consultas', 'Gestión básica'],
    },
    {
        title: 'Cloud & Plataformas',
        icon: 'Cloud',
        color: 'violet',
        skills: ['Microsoft Azure', 'Microsoft 365', 'SharePoint Online'],
    },
    {
        title: 'Identidades & Seguridad',
        icon: 'Shield',
        color: 'orange',
        skills: ['Active Directory', 'Usuarios', 'Grupos', 'Permisos'],
    },
    {
        title: 'Automatización',
        icon: 'Workflow',
        color: 'pink',
        skills: ['n8n', 'Integración de APIs', 'Flujos automatizados'],
    },
    {
        title: 'Herramientas',
        icon: 'Wrench',
        color: 'cyan',
        skills: ['GLPI', 'Azure DevOps', 'Git', 'ITIL v4', 'VS Code'],
    },
]

// ─── Experiencia Profesional ───────────────────────────────────────────
export const EXPERIENCE = [
    {
        company: 'Sinapsys-IT',
        role: 'Analista de Sistemas — Soporte Técnico N2',
        period: 'Oct 2024 – Actualidad',
        isActive: true,
        highlights: [
            'Soporte avanzado a Microsoft 365 y apps corporativas',
            'Administración de accesos en Active Directory y SharePoint',
            'Análisis de logs para diagnóstico de incidentes complejos',
            'Pruebas funcionales y apoyo en despliegues de software',
        ],
    },
    {
        company: 'Taller 5',
        role: 'Asistente de Sistemas — Soporte Técnico',
        period: 'May 2024 – Sep 2024',
        isActive: false,
        highlights: [
            'Creó e implementó mesa de ayuda con GLPI',
            'Soporte en despliegue y validación funcional de aplicaciones',
            'Documentación técnica y manuales de usuario',
        ],
    },
    {
        company: 'Telefónica – Proyecto SENA',
        role: 'Soporte Técnico en Sitio N2',
        period: 'Abr 2022 – Mar 2024',
        isActive: false,
        highlights: [
            'Gestión de incidentes en infraestructura de 700+ equipos',
            'Diagnóstico de hardware, parcheo y reparaciones break-fix',
            'Análisis de logs para reducción de incidentes recurrentes',
        ],
    },
    {
        company: 'SITIC de Colombia',
        role: 'Técnico de Mantenimiento',
        period: 'Nov 2021 – Feb 2022',
        isActive: false,
        highlights: [
            'Mantenimiento preventivo y correctivo de estaciones de trabajo',
            'Documentación técnica de procesos de soporte',
        ],
    },
]

// ─── Formación ─────────────────────────────────────────────────────────
export const EDUCATION = [
    {
        degree: 'Ingeniería de Sistemas',
        institution: '',
        period: 'Último semestre — Finaliza 2026',
    },
    {
        degree: 'ADSO — Análisis y Desarrollo de Software',
        institution: 'SENA',
        period: 'En curso, finaliza 2026',
    },
    {
        degree: 'Técnico Profesional en Sistemas',
        institution: 'SENA',
        period: '2021',
    },
]

export const CERTIFICATIONS = [
    {
        name: 'ITIL v4 Foundation',
        issuer: 'PeopleCert',
        color: 'blue',
    },
    {
        name: 'Bootcamp en Programación Web',
        issuer: 'Completado',
        color: 'violet',
    },
]

// ─── Competencias ──────────────────────────────────────────────────────
export const COMPETENCIES = [
    {
        title: 'Pensamiento Analítico',
        description: 'Resolución de problemas complejos aplicada al desarrollo de software',
        icon: 'Code2',
        color: 'blue',
    },
    {
        title: 'Git & Versionado',
        description: 'Control de versiones, branching y trabajo colaborativo',
        icon: 'GitBranch',
        color: 'emerald',
    },
    {
        title: 'ITIL v4',
        description: 'Gestión de servicios TI, SLA y mejores prácticas operativas',
        icon: 'Globe',
        color: 'violet',
    },
    {
        title: 'Documentación Técnica',
        description: 'Manuales de usuario, README y documentación de procesos',
        icon: 'Terminal',
        color: 'orange',
    },
    {
        title: 'Orientación al Cliente',
        description: 'Comunicación efectiva y empatía para soporte y atención de usuarios',
        icon: 'Server',
        color: 'pink',
    },
    {
        title: 'Adaptabilidad',
        description: 'Trabajo en equipo colaborativo y adaptación a entornos dinámicos',
        icon: 'Wrench',
        color: 'cyan',
    },
]
