'use client'

import { Terminal, Code2, Database, Cloud, Shield, Workflow, Wrench } from 'lucide-react'
import { SkillCard, SectionHeading } from './ui-shared'
import { SKILLS } from './data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Code2, Database, Cloud, Shield, Workflow, Wrench,
}

export function SkillsSection() {
    return (
        <section className="py-14 border-b border-slate-700/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading icon={Terminal} title="Stack Tecnológico" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SKILLS.map((s) => {
                            const Icon = ICON_MAP[s.icon]
                            return (
                                <SkillCard
                                    key={s.title}
                                    icon={Icon}
                                    title={s.title}
                                    skills={s.skills}
                                    color={s.color}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
