'use client'

import { Zap, Code2, GitBranch, Globe, Terminal, Server, Wrench } from 'lucide-react'
import { SectionHeading } from './ui-shared'
import { COMPETENCIES } from './data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Code2, GitBranch, Globe, Terminal, Server, Wrench,
}

const COLOR_TEXT: Record<string, string> = {
    blue: 'text-blue-400',
    emerald: 'text-emerald-400',
    violet: 'text-violet-400',
    orange: 'text-orange-400',
    pink: 'text-pink-400',
    cyan: 'text-cyan-400',
}

export function CompetenciesSection() {
    return (
        <section className="py-14 border-b border-slate-700/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading icon={Zap} title="Enfoque y Competencias" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {COMPETENCIES.map((c) => {
                            const Icon = ICON_MAP[c.icon]
                            const textColor = COLOR_TEXT[c.color] ?? 'text-slate-400'
                            return (
                                <div
                                    key={c.title}
                                    className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-600/40 transition-all hover:scale-105"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <Icon className={`w-5 h-5 ${textColor}`} />
                                        <h4 className="text-white font-medium text-sm">{c.title}</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
