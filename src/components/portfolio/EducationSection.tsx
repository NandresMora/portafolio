'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Code2 } from 'lucide-react'
import { GraduationCap, SectionHeading } from './ui-shared'
import { EDUCATION, CERTIFICATIONS } from './data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Award,
    Code2,
}

const CERT_COLOR: Record<string, string> = {
    blue: 'bg-blue-600/20 text-blue-400',
    violet: 'bg-violet-600/20 text-violet-400',
}

export function EducationSection() {
    return (
        <section className="py-14 border-b border-slate-700/30 bg-slate-800/30" id="education">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading icon={GraduationCap} title="Formación & Certificaciones" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Education */}
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">
                                Educación
                            </p>
                            <div className="space-y-3">
                                {EDUCATION.map((ed) => (
                                    <Card key={ed.degree} className="bg-slate-800/50 border-slate-700">
                                        <CardContent className="py-4 px-5">
                                            <h5 className="text-white font-semibold text-sm">{ed.degree}</h5>
                                            {ed.institution && (
                                                <p className="text-blue-400 text-xs">{ed.institution}</p>
                                            )}
                                            <p className="text-slate-500 text-xs mt-0.5">{ed.period}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">
                                Certificaciones
                            </p>
                            <div className="space-y-3">
                                {CERTIFICATIONS.map((cert) => {
                                    const iconCls = CERT_COLOR[cert.color] ?? 'bg-slate-700 text-white'
                                    const Icon = cert.color === 'blue' ? Award : Code2
                                    return (
                                        <Card
                                            key={cert.name}
                                            className={`bg-slate-800/50 border-${cert.color}-600/30 border`}
                                        >
                                            <CardContent className="py-4 px-5">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${iconCls}`}
                                                    >
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <h5 className="text-white font-semibold text-sm">{cert.name}</h5>
                                                        <p className="text-slate-400 text-xs">{cert.issuer}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
