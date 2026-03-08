'use client'

import { Layout, Workflow, Shield, Cloud } from 'lucide-react'

const CARDS = [
    {
        icon: Layout,
        title: 'Desarrollo Web',
        description:
            'Interfaces con JavaScript, HTML/CSS y consumo de APIs REST para integración de aplicaciones.',
        accent: 'from-blue-500 to-blue-600',
    },
    {
        icon: Workflow,
        title: 'Automatización',
        description:
            'Flujos de trabajo automatizados con n8n e integración de servicios web para optimizar procesos.',
        accent: 'from-violet-500 to-violet-600',
    },
    {
        icon: Shield,
        title: 'Soporte TI N2',
        description:
            'Troubleshooting avanzado, diagnóstico de incidentes, análisis de logs y gestión bajo ITIL v4.',
        accent: 'from-emerald-500 to-emerald-600',
    },
    {
        icon: Cloud,
        title: 'Cloud & Admin',
        description:
            'Microsoft Azure, M365, SharePoint Online y gestión de identidades con Active Directory.',
        accent: 'from-orange-500 to-orange-600',
    },
]

export function WhatIDoSection() {
    return (
        <section className="py-14 border-b border-slate-700/30 bg-slate-800/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Lo Que Hago</h3>
                        <p className="text-slate-400">Mi perfil combina desarrollo e infraestructura</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {CARDS.map(({ icon: Icon, title, description, accent }) => (
                            <div
                                key={title}
                                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-600/40 transition-all hover:scale-105 group"
                            >
                                <div
                                    className={`w-12 h-12 bg-gradient-to-br ${accent} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold text-base mb-2">{title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
