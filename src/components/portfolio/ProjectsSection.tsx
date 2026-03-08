'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cpu, ExternalLink, Star, CheckCircle2, Bot } from 'lucide-react'
import { SectionHeading } from './ui-shared'
import { WEB_PROJECTS, IT_PROJECTS } from './data'

export function ProjectsSection() {
    return (
        <>
            {/* ─── Web Projects ──────────────────────────────────────────── */}
            <section id="proyectos" className="py-16 border-b border-slate-700/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeading
                            icon={Cpu}
                            title="Proyectos Web Destacados"
                            subtitle="Mis desarrollos web"
                        />
                        <div className="space-y-6">
                            {WEB_PROJECTS.map((project, index) => (
                                <Card
                                    key={index}
                                    className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all hover:shadow-lg hover:shadow-blue-900/10 group"
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                                                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 text-xs">
                                                        <Star className="w-3 h-3 mr-1" />
                                                        Web
                                                    </Badge>
                                                </div>
                                                <CardDescription className="text-slate-400 text-sm leading-relaxed">
                                                    {project.description}
                                                </CardDescription>
                                            </div>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-slate-400 hover:text-blue-400 flex-shrink-0"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </Button>
                                            </a>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        {/* Two-column layout: info left, preview image right */}
                                        <div className="flex flex-col md:flex-row gap-6">

                                            {/* Left: details */}
                                            <div className="flex-1 space-y-4">
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Tecnologías</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map((tech) => (
                                                            <Badge
                                                                key={tech}
                                                                className="bg-blue-600/15 text-blue-400 border-blue-600/25"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Mi rol</p>
                                                    <p className="text-slate-300 text-sm">{project.role}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Logros</p>
                                                    <ul className="space-y-1">
                                                        {project.achievements.map((a, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                                {a}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Right: preview image */}
                                            {project.image && (
                                                <div className="flex-shrink-0 flex items-center justify-center">
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            src={project.image}
                                                            alt={`Preview ${project.title}`}
                                                            className="w-52 h-36 object-cover rounded-lg border border-slate-700 hover:border-blue-500/60 transition-all shadow-md shadow-slate-900/40"
                                                        />
                                                    </a>
                                                </div>
                                            )}

                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── IT Projects (mention) ──────────────────────────────────── */}
            <section className="py-12 border-b border-slate-700/30 bg-slate-800/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeading
                            icon={Bot}
                            title="Proyectos TI & Automatización"
                            subtitle="Proyectos realizados en entornos corporativos"
                            iconColor="text-emerald-400"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {IT_PROJECTS.map((project, index) => (
                                <div
                                    key={index}
                                    className="p-5 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-600/40 transition-all hover:scale-105"
                                >
                                    <h4 className="text-white font-semibold mb-2">{project.title}</h4>
                                    <p className="text-slate-400 text-sm mb-3 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.map((t) => (
                                            <Badge
                                                key={t}
                                                className="bg-emerald-600/15 text-emerald-400 border-emerald-600/25 text-xs"
                                            >
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
