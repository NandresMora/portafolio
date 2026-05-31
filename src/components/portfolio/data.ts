// ═══════════════════════════════════════════════════════════
// data.ts — Datos del portafolio de Andrés Mora
// Edita este archivo para personalizar tu información
// ═══════════════════════════════════════════════════════════

export const PERSONAL = {
    name: 'Andrés Mora',
    fullName: 'Andrés Mora Mateus',
    title: 'Ingeniero de Sistemas | DevOps Junior',
    heroTitle: 'Ingeniero DevOps Junior ',
    heroHighlight: 'Automatización & Cultura CAMS',
    bio: 'Estudiante de último semestre de Ingeniería de Sistemas con 4+ años de experiencia técnica. Especializado en cerrar la brecha entre desarrollo y operaciones mediante la automatización, gestión de infraestructura cloud y optimización de flujos de trabajo.',
    location: 'Chía, Cundinamarca – Colombia',
    email: 'andres.mora.mateus@gmail.com',
    phone: '+57 312 360 2705',
    phoneHref: 'tel:+573123602705',
    linkedin: 'https://linkedin.com/in/andres-mora-it',
    linkedinLabel: 'linkedin.com/in/andres-mora-it',
    github: 'https://github.com/NandresMora?tab=overview&from=2026-01-01&to=2026-01-31',
    githubLabel: 'github.com/NandresMora',
    available: true,
}

export const STATS = [
    { value: 5, suffix: '+', label: 'Proyectos DevOps', icon: 'Rocket' },
    { value: 4, suffix: '+', label: 'Años en TI', icon: 'Briefcase' },
    { value: 700, suffix: '+', label: 'Equipos Gestionados', icon: 'MonitorCog' },
    { value: 1, suffix: '', label: 'Certificación ITIL v4', icon: 'Award' },
] as const

export const TECH_BADGES = [
    'Docker', 'Azure', 'Python', 'Bash', 'CI/CD', 'Linux', 'n8n', 'ITIL v4',
]

// ─── Proyectos Web ─────────────────────────────────────────────────────
export const WEB_PROJECTS = [
    {
        title: 'Pipeline CI/CD Sinnexys',
        description: 'Optimización del despliegue y gestión de infraestructura cloud para una plataforma de consultoría TI.',
        functionalDescription: 'Automatización del ciclo de vida del software, reduciendo errores manuales en despliegues y mejorando la disponibilidad del sitio.',
        technicalDescription: 'Implementación de contenedores Docker, flujos de integración continua y despliegue automatizado hacia Supabase y entornos cloud.',
        tech: ['Docker', 'GitHub Actions', 'Supabase', 'TypeScript'],
        role: 'Ingeniero DevOps / Deploy',
        image: '/sinnexys.png',
        status: 'completed',
        achievements: [
            'Reducción del 40% en tiempos de despliegue mediante automatización.',
            'Configuración de entornos aislados con contenedores para desarrollo y producción.',
            'Implementación de monitoreo básico de salud de la aplicación.',
        ],
        demoLink: 'https://www.sinnexys.dev',
        repoLink: 'https://github.com/NandresMora',
    },
    {
        title: 'Automatización Infraestructura DyD',
        description: 'Migración y orquestación de servicios web corporativos para una firma contable.',
        functionalDescription: 'Aseguramiento de la continuidad del negocio mediante backups automatizados y gestión eficiente de recursos cloud.',
        technicalDescription: 'Configuración de servidores web bajo Node.js, gestión de certificados SSL automatizada y optimización de logs.',
        tech: ['Node.js', 'Linux', 'Nginx', 'SSL/TLS'],
        role: 'Administrador de Sistemas',
        image: '/dydcontadores.jpg',
        status: 'completed',
        achievements: [
            'Implementación de certificados de seguridad automáticos con Certbot.',
            'Configuración de logs centralizados para diagnóstico rápido de caídas.',
            'Optimización de la configuración del servidor para soportar picos de tráfico.',
        ],
        demoLink: 'https://dydcontadores.vercel.app/',
        repoLink: 'https://github.com/NandresMora',
    },
    {
        title: 'Integración API SENA Ecommerce',
        description: 'Gestión de flujos de datos y conectividad entre servicios frontend y backend.',
        functionalDescription: 'Garantía de integridad de datos en el intercambio de información entre la tienda virtual y servicios externos.',
        technicalDescription: 'Consumo y orquestación de APIs REST, manejo de variables de entorno y seguridad en la comunicación cliente-servidor.',
        tech: ['API REST', 'JavaScript', 'Environment Management', 'JSON'],
        role: 'Integrador de Sistemas',
        image: '/sena-ecommerce.png',
        status: 'completed',
        achievements: [
            'Normalización de respuestas de API para mejorar la resiliencia del frontend.',
            'Implementación de manejo de errores en capas de integración.',
            'Optimización de peticiones asíncronas para reducir latencia.',
        ],
        demoLink: 'https://github.com/johanjaguardev/SENA-ecommerce.git',
        repoLink: 'https://github.com/johanjaguardev/SENA-ecommerce.git',
    },
    {
        title: 'Dashboard de Gestión de Activos (IaC)',
        description: 'Prototipo de sistema de inventario con despliegue automatizado e infraestructura como código.',
        functionalDescription: 'Control centralizado de activos tecnológicos con trazabilidad completa de cambios en la infraestructura.',
        technicalDescription: 'Desarrollo bajo Next.js 14, orquestación con Prisma y base de datos PostgreSQL, con despliegue mediante infraestructura declarativa.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker Compose'],
        role: 'DevOps & Full Stack',
        image: '/logo.svg',
        status: 'in-progress',
        achievements: [
            'Diseño de esquema de base de datos optimizado para auditoría.',
            'Contenerización de la base de datos y la aplicación para portabilidad total.',
            'Implementación de scripts de migración automática de esquemas.',
        ],
        demoLink: '#',
        repoLink: 'https://github.com/NandresMora',
    },
]

// ─── Proyectos TI (del CV) ─────────────────────────────────────────────
export const IT_PROJECTS = [
    {
        title: 'Chatbot DevOps N1',
        description:
            'Integración de Microsoft Teams con GLPI mediante webhooks para automatizar la apertura de tickets.',
        tech: ['Webhooks', 'API REST', 'Microsoft Teams'],
    },
    {
        title: 'Estandarización ITIL con GLPI',
        description:
            'Implementación de procesos ITSM para gestión de cambios y configuración de SLAs automáticos.',
        tech: ['GLPI', 'ITIL v4', 'Automation'],
    },
    {
        title: 'Flujos n8n para Operaciones',
        description:
            'Automatización de tareas repetitivas de TI interconectando aplicaciones mediante flujos de bajo código.',
        tech: ['n8n', 'APIs REST', 'No-Code/Low-Code'],
    },
]

// ─── Stack Tecnológico ─────────────────────────────────────────────────
export const SKILLS = [
    {
        title: 'Automatización & Scripting',
        icon: 'Code2',
        color: 'blue',
        skills: ['Python', 'Bash', 'JavaScript', 'n8n'],
    },
    {
        title: 'Contenedores & Orquestación',
        icon: 'Database',
        color: 'emerald',
        skills: ['Docker', 'Docker Compose', 'Kubernetes (Learning)', 'Linux'],
    },
    {
        title: 'Cloud & Infraestructura',
        icon: 'Cloud',
        color: 'violet',
        skills: ['Microsoft Azure', 'Azure DevOps', 'AWS (Basic)', 'M365'],
    },
    {
        title: 'CI/CD & Versionado',
        icon: 'Workflow',
        color: 'pink',
        skills: ['GitHub Actions', 'Git', 'Branching Strategy', 'Pipelines'],
    },
    {
        title: 'Seguridad & Identidades',
        icon: 'Shield',
        color: 'orange',
        skills: ['Active Directory', 'IAM', 'Seguridad en APIs', 'Permisos'],
    },
    {
        title: 'Gestión & Herramientas',
        icon: 'Wrench',
        color: 'cyan',
        skills: ['ITIL v4', 'GLPI', 'VS Code', 'Azure Boards', 'Monitoring'],
    },
]

// ─── Experiencia Profesional ───────────────────────────────────────────
export const EXPERIENCE = [
    {
        company: 'Sinapsys-IT',
        role: 'Analista de Sistemas & Operaciones — Soporte N2',
        period: 'Oct 2024 – Actualidad',
        isActive: true,
        highlights: [
            'Gestión y monitoreo de infraestructura Microsoft 365 y Azure.',
            'Administración automatizada de accesos y permisos en AD y SharePoint.',
            'Análisis profundo de logs para identificación proactiva de fallas en sistemas.',
            'Colaboración en el despliegue y validación de nuevas versiones de software.',
        ],
    },
    {
        company: 'Taller 5',
        role: 'Especialista en Sistemas — Automatización ITSM',
        period: 'May 2024 – Sep 2024',
        isActive: false,
        highlights: [
            'Lideró la implementación de la mesa de ayuda GLPI bajo buenas prácticas ITIL.',
            'Automatizó flujos de escalamiento y notificación de incidentes.',
            'Validó despliegues funcionales asegurando la estabilidad operativa.',
        ],
    },
    {
        company: 'Telefónica – Proyecto SENA',
        role: 'Soporte Técnico Especializado N2',
        period: 'Abr 2022 – Mar 2024',
        isActive: false,
        highlights: [
            'Mantenimiento de infraestructura crítica para 700+ estaciones de trabajo.',
            'Diagnóstico y resolución de problemas de hardware y red a nivel operativo.',
            'Generación de informes técnicos de disponibilidad y desempeño.',
        ],
    },
]

// ─── Formación ─────────────────────────────────────────────────────────
export const EDUCATION = [
    {
        degree: 'Ingeniería de Sistemas',
        institution: 'Último Semestre',
        period: 'Finaliza 2026',
    },
    {
        degree: 'ADSO — Análisis y Desarrollo de Software',
        institution: 'SENA',
        period: 'En curso',
    },
    {
        degree: 'Técnico Profesional en Sistemas',
        institution: 'SENA',
        period: 'Graduado 2021',
    },
]

export const CERTIFICATIONS = [
    {
        name: 'ITIL v4 Foundation',
        issuer: 'PeopleCert',
        color: 'blue',
    },
    {
        name: 'Fundamentos de DevOps',
        issuer: 'Formación Complementaria',
        color: 'violet',
    },
]

// ─── Competencias ──────────────────────────────────────────────────────
export const COMPETENCIES = [
    {
        title: 'Cultura DevOps (CAMS)',
        description: 'Enfoque en colaboración, automatización, medición y compartición de conocimiento.',
        icon: 'Globe',
        color: 'violet',
    },
    {
        title: 'Infraestructura como Código',
        description: 'Gestión y aprovisionamiento de recursos mediante definición declarativa.',
        icon: 'Terminal',
        color: 'orange',
    },
    {
        title: 'Monitoreo & Logs',
        description: 'Análisis preventivo de sistemas para asegurar alta disponibilidad y resiliencia.',
        icon: 'Server',
        color: 'pink',
    },
    {
        title: 'Gestión de SLAs',
        description: 'Cumplimiento de acuerdos de nivel de servicio bajo marcos de trabajo ágiles.',
        icon: 'Code2',
        color: 'blue',
    },
    {
        title: 'Integración Continua',
        description: 'Automatización de pruebas y validaciones en el ciclo de vida del desarrollo.',
        icon: 'GitBranch',
        color: 'emerald',
    },
    {
        title: 'Respuesta a Incidentes',
        description: 'Diagnóstico rápido y resolución efectiva bajo presión en entornos críticos.',
        icon: 'Wrench',
        color: 'cyan',
    },
]
