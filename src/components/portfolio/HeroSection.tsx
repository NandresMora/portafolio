'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Github,
    MapPin,
    Rocket,
    Briefcase,
    Award,
    ArrowRight,
    Sparkles,
    MonitorCog,
    Terminal,
} from 'lucide-react'
import { AnimatedCounter, TechBadge } from './ui-shared'
import { PERSONAL, TECH_BADGES, STATS } from './data'
import { id } from 'date-fns/locale'

// ─── Icon map for stats ────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Rocket,
    Briefcase,
    Award,
    MonitorCog,
}

// ─── Floating Code Snippet ─────────────────────────────────────────────
function FloatingSnippet({
    code,
    className,
}: {
    code: string
    className?: string
}) {
    return (
        <div
            className={`hidden lg:block absolute bg-slate-800/80 border border-slate-700/80 rounded-lg px-4 py-2.5 font-mono text-xs text-emerald-400 backdrop-blur-sm shadow-xl shadow-slate-900/40 ${className} `}
        >
            <span className="text-blue-400 select-none" id="about">{'> '}</span>
            {code}
        </div>
    )
}

// ─── Decorative grid background ────────────────────────────────────────
function GridDecoration() {
    return (
        <svg
            className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    )
}

// ─── Terminal Window ───────────────────────────────────────────────────
function TerminalWindow() {
    return (
        <div className="hidden xl:block absolute right-50 top-1/2 -translate-y-1/2 w-72 bg-slate-900/90 border border-slate-700/80 rounded-xl overflow-hidden shadow-2xl shadow-slate-900/60 backdrop-blur-sm">
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-slate-500 text-xs font-mono">andres@portfolio</span>
            </div>
            {/* Content */}
            <div className="px-4 py-4 font-mono text-xs space-y-2 text-slate-600">
                <p>
                    <span className="text-emerald-400">~</span>{' '}
                    <span className="text-blue-400">whoami</span>
                </p>
                <p className="text-slate-400">Andrés Mora Mateus</p>
                <p className="text-slate-500">Ingeniero de Sistemas Jr</p>
                <p className="mt-2">
                    <span className="text-emerald-400">~</span>{' '}
                    <span className="text-blue-400">cat skills.txt</span>
                </p>
                <p className="text-slate-400">JavaScript · Python</p>
                <p className="text-slate-400">Azure · APIs REST · n8n · IA · React</p>
                <p className="mt-2">
                    <span className="text-emerald-400">~</span>{' '}
                    <span className="text-blue-400">echo $STATUS</span>
                </p>
                <p className="text-emerald-400 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Proyecciones
                </p>
                <p className="text-slate-600 mt-2">
                    <span className="animate-pulse">▌</span>
                </p>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════
export function HeroSection() {
    return (
        <section className="py-16 md:py-20 border-b border-slate-700/30 relative overflow-hidden min-h-[520px] flex items-center">
            {/* Decorations */}
            <GridDecoration />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            {/* Floating code snippets */}
            <FloatingSnippet
                code="const dev = new Engineer('Andrés')"
                className="top-8 right-[340px] animate-[float_6s_ease-in-out_infinite]"
            />
            <FloatingSnippet
                code="git commit -m 'feat: new project'"
                className="bottom-12 right-[380px] animate-[float_7s_ease-in-out_0.5s_infinite]"
            />

            {/* Terminal window (right side, large screens) */}
            <TerminalWindow />

            {/* Main content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl xl:max-w-3xl">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                        </span>
                        <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30">
                            Dispuesto a nuevas ideas
                        </Badge>
                    </div>

                    {/* Avatar + Name row */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/40 flex-shrink-0">
                            AM
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">Hola, soy</p>
                            <p className="text-white font-bold text-xl">{PERSONAL.fullName}</p>
                        </div>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                        {PERSONAL.heroTitle}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                            {PERSONAL.heroHighlight}
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-4 max-w-xl">
                        Estudiante de último semestre de Ingeniería de Sistemas con{' '}
                        <strong className="text-white">4+ años en TI</strong> y pasión
                        por el desarrollo web. Combino conocimiento operativo real de
                        infraestructura con programación para crear soluciones reales.
                    </p>

                    {/* Location */}
                    <p className="flex items-center gap-1.5 text-slate-400 text-sm mb-8">
                        <MapPin className="w-4 h-4" />
                        {PERSONAL.location}
                    </p>

                    {/* Animated Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                        {STATS.map((stat) => {
                            const Icon = ICON_MAP[stat.icon]
                            return (
                                <AnimatedCounter
                                    key={stat.label}
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    label={stat.label}
                                    icon={Icon}
                                />
                            )
                        })}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {TECH_BADGES.map((tech, i) => (
                            <TechBadge key={tech} delay={i * 80}>
                                {tech}
                            </TechBadge>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <a href="#proyectos">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-lg shadow-blue-900/30"
                            >
                                <Sparkles className="w-4 h-4 mr-2" />
                                Ver Proyectos
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer">
                            <Button
                                size="lg"
                                variant="default"
                                className="border-white text-white hover:bg-slate-800"
                            >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
