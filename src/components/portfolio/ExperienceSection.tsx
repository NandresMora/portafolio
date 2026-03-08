'use client'

import { Briefcase } from 'lucide-react'
import { TimelineItem, SectionHeading } from './ui-shared'
import { EXPERIENCE } from './data'

export function ExperienceSection() {
    return (
        <section className="py-16 border-b border-slate-700/30" id="experience">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <SectionHeading icon={Briefcase} title="Experiencia Profesional" />
                    {EXPERIENCE.map((job) => (
                        <TimelineItem
                            key={job.company + job.period}
                            company={job.company}
                            role={job.role}
                            period={job.period}
                            highlights={job.highlights}
                            isActive={job.isActive}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
