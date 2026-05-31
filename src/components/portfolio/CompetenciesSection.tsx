'use client'

import { Zap, Code2, GitBranch, Globe, Terminal, Server, Wrench } from 'lucide-react'
import { SectionHeading } from './ui-shared'
import { COMPETENCIES } from './data'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Code2, GitBranch, Globe, Terminal, Server, Wrench,
}

const COLOR_VARIANTS: Record<string, string> = {
    blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    violet: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    orange: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    pink: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
}

export function CompetenciesSection() {
    return (
        <section className="py-20 border-b border-slate-700/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading 
                        icon={Zap} 
                        title="Enfoque y Competencias" 
                        subtitle="Habilidades blandas y metodologías que complementan mi perfil técnico"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COMPETENCIES.map((c, idx) => {
                            const Icon = ICON_MAP[c.icon]
                            const variant = COLOR_VARIANTS[c.color] ?? 'text-slate-400 bg-slate-400/10 border-slate-400/20'
                            const [text, bg, border] = variant.split(' ')
                            
                            return (
                                <motion.div
                                    key={c.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all hover:bg-slate-800/50 group"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", bg, border, "border")}>
                                            <Icon className={cn("w-5 h-5", text)} />
                                        </div>
                                        <h4 className="text-white font-bold">{c.title}</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
