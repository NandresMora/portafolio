'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
    Cpu, 
    ExternalLink, 
    Github, 
    CheckCircle2, 
    Bot, 
    Info, 
    Layout, 
    Layers, 
    Timer, 
    ArrowRight 
} from 'lucide-react'
import { SectionHeading } from './ui-shared'
import { WEB_PROJECTS, IT_PROJECTS } from './data'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion'

export function ProjectsSection() {
    const [filter, setFilter] = useState('all')

    const filteredProjects = WEB_PROJECTS.filter(project => {
        if (filter === 'all') return true
        return project.status === filter
    })

    return (
        <>
            {/* ─── Web Projects ──────────────────────────────────────────── */}
            <section id="proyectos" className="py-20 border-b border-slate-700/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <SectionHeading
                                icon={Cpu}
                                title="Infraestructura & Automatización"
                                subtitle="Proyectos enfocados en DevOps, CI/CD y mejora operativa"
                            />
                            
                            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilter}>
                                <TabsList className="bg-slate-800/50 border border-slate-700 p-1">
                                    <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                                        Todos
                                    </TabsTrigger>
                                    <TabsTrigger value="completed" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                                        Finalizados
                                    </TabsTrigger>
                                    <TabsTrigger value="in-progress" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                                        En Desarrollo
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <AnimatePresence mode='popLayout'>
                                {filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Card className="h-full bg-slate-800/40 border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/20 group overflow-hidden flex flex-col">
                                            {/* Image Preview Header */}
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                                <div className="absolute top-4 right-4">
                                                    {project.status === 'in-progress' ? (
                                                        <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 backdrop-blur-md">
                                                            <Timer className="w-3 h-3 mr-1" />
                                                            En Desarrollo
                                                        </Badge>
                                                    ) : (
                                                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 backdrop-blur-md">
                                                            <CheckCircle2 className="w-3 h-3 mr-1" />
                                                            Finalizado
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>

                                            <CardHeader className="flex-grow">
                                                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                                                <CardDescription className="text-slate-400 text-sm line-clamp-2">
                                                    {project.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="pt-0 space-y-6">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.slice(0, 3).map((tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="outline"
                                                            className="bg-blue-600/10 text-blue-400 border-blue-600/20"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                    {project.tech.length > 3 && (
                                                        <Badge variant="outline" className="bg-slate-700/30 text-slate-400 border-slate-700">
                                                            +{project.tech.length - 3}
                                                        </Badge>
                                                    )}
                                                </div>

                                                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-700/50">
                                                    <div className="flex gap-2">
                                                        {project.repoLink !== '#' && (
                                                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" title="Repositorio">
                                                                <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-white hover:bg-slate-700">
                                                                    <Github className="w-5 h-5" />
                                                                </Button>
                                                            </a>
                                                        )}
                                                        {project.demoLink !== '#' && (
                                                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" title="Demo en vivo">
                                                                <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-blue-400 hover:bg-slate-700">
                                                                    <ExternalLink className="w-5 h-5" />
                                                                </Button>
                                                            </a>
                                                        )}
                                                    </div>

                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                                                                Ver Detalles
                                                                <ArrowRight className="w-4 h-4" />
                                                            </Button>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-3xl bg-slate-900 border-slate-800 text-slate-100 overflow-y-auto max-h-[90vh]">
                                                            <DialogHeader>
                                                                <div className="flex items-center gap-3 mb-2">
                                                                    <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
                                                                    <Badge className={project.status === 'in-progress' ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}>
                                                                        {project.status === 'in-progress' ? 'En Desarrollo' : 'Finalizado'}
                                                                    </Badge>
                                                                </div>
                                                                <DialogDescription className="text-slate-400 text-base">
                                                                    {project.description}
                                                                </DialogDescription>
                                                            </DialogHeader>

                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                                                                <div className="space-y-6">
                                                                    <div className="space-y-3">
                                                                        <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                                                                            <Layout className="w-4 h-4" />
                                                                            Descripción Funcional
                                                                        </h4>
                                                                        <p className="text-slate-300 text-sm leading-relaxed">
                                                                            {project.functionalDescription}
                                                                        </p>
                                                                    </div>

                                                                    <div className="space-y-3">
                                                                        <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                                                                            <Layers className="w-4 h-4" />
                                                                            Detalles Técnicos
                                                                        </h4>
                                                                        <p className="text-slate-300 text-sm leading-relaxed">
                                                                            {project.technicalDescription}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-6">
                                                                    <div>
                                                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Tecnologías</h4>
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {project.tech.map((t) => (
                                                                                <Badge key={t} className="bg-slate-800 text-slate-300 border-slate-700">
                                                                                    {t}
                                                                                </Badge>
                                                                            ))}
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Logros Clave</h4>
                                                                        <ul className="space-y-2">
                                                                            {project.achievements.map((a, i) => (
                                                                                <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                                                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                                                    <span>{a}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-800">
                                                                {project.demoLink !== '#' && (
                                                                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                                                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                                                            Visitar Demo en Vivo
                                                                            <ExternalLink className="ml-2 w-4 h-4" />
                                                                        </a>
                                                                    </Button>
                                                                )}
                                                                {project.repoLink !== '#' && (
                                                                    <Button asChild variant="outline" className="flex-1 border-slate-700 hover:bg-slate-800 text-slate-300">
                                                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                                                            Ver Código Fuente
                                                                            <Github className="ml-2 w-4 h-4" />
                                                                        </a>
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── IT Projects (mention) ──────────────────────────────────── */}
            <section className="py-20 border-b border-slate-700/30 bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <SectionHeading
                            icon={Bot}
                            title="TI & Automatización"
                            subtitle="Soluciones corporativas y optimización de procesos"
                            iconColor="text-emerald-400"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {IT_PROJECTS.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                        <Info className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <h4 className="text-white font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                                    <p className="text-slate-400 text-sm mb-5 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-1 rounded-md bg-slate-900 text-slate-400 text-[10px] font-medium uppercase tracking-wider border border-slate-800"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
