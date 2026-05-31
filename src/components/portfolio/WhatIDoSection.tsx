'use client'

import { Workflow, Shield, Cloud, Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const CARDS = [
    {
        icon: Workflow,
        title: 'CI/CD & Automatización',
        description:
            'Diseño de pipelines robustos y automatización de flujos con n8n para acelerar los ciclos de entrega.',
        accent: 'from-blue-500 to-blue-600',
        light: 'bg-blue-500/10 text-blue-400',
    },
    {
        icon: Cloud,
        title: 'Infraestructura Cloud',
        description:
            'Gestión de entornos en Microsoft Azure y administración de servicios escalables bajo demanda.',
        accent: 'from-violet-500 to-violet-600',
        light: 'bg-violet-500/10 text-violet-400',
    },
    {
        icon: Activity,
        title: 'Monitoreo & SRE',
        description:
            'Análisis de logs y métricas de salud para garantizar la alta disponibilidad y resiliencia de los sistemas.',
        accent: 'from-emerald-500 to-emerald-600',
        light: 'bg-emerald-500/10 text-emerald-400',
    },
    {
        icon: Shield,
        title: 'Seguridad & ITSM',
        description:
            'Administración de identidades (IAM) y gestión de servicios TI alineados a buenas prácticas ITIL v4.',
        accent: 'from-orange-500 to-orange-600',
        light: 'bg-orange-500/10 text-orange-400',
    },
]

export function WhatIDoSection() {
    return (
        <section className="py-20 border-b border-slate-700/30 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h3 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-white mb-4"
                        >
                            Especialidades
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg max-w-2xl mx-auto"
                        >
                            Soluciones integrales que unen el mundo del desarrollo de software con la infraestructura tecnológica.
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CARDS.map(({ icon: Icon, title, description, accent, light }, idx) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-slate-800/40 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all group relative overflow-hidden"
                            >
                                <div className={cn("absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity blur-2xl", accent)} />
                                
                                <div
                                    className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl", light)}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">{title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
