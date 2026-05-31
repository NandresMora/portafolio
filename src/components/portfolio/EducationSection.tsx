'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Code2, GraduationCap as GradIcon } from 'lucide-react'
import { SectionHeading } from './ui-shared'
import { EDUCATION, CERTIFICATIONS } from './data'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const CERT_COLOR: Record<string, string> = {
    blue: 'bg-blue-600/10 text-blue-400 border-blue-600/20',
    violet: 'bg-violet-600/10 text-violet-400 border-violet-600/20',
}

export function EducationSection() {
    return (
        <section className="py-20 border-b border-slate-700/30 bg-slate-900/50" id="education">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading 
                        icon={GradIcon} 
                        title="Formación & Certificaciones" 
                        subtitle="Mi trayectoria académica y validaciones profesionales"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <span className="w-8 h-px bg-slate-700" />
                                Educación
                            </h4>
                            <div className="space-y-4">
                                {EDUCATION.map((ed, idx) => (
                                    <Card key={ed.degree} className="bg-slate-800/40 border-slate-700/50 hover:border-blue-500/30 transition-all group">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <h5 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">{ed.degree}</h5>
                                                    {ed.institution && (
                                                        <p className="text-slate-400 font-medium mt-1">{ed.institution}</p>
                                                    )}
                                                </div>
                                                <Badge variant="outline" className="bg-slate-900/50 text-slate-500 border-slate-800 font-mono text-[10px]">
                                                    {ed.period}
                                                </Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                <span className="w-8 h-px bg-slate-700" />
                                Certificaciones
                            </h4>
                            <div className="space-y-4">
                                {CERTIFICATIONS.map((cert) => {
                                    const colorCls = CERT_COLOR[cert.color] ?? 'bg-slate-800 text-slate-400'
                                    const Icon = cert.color === 'blue' ? Award : Code2
                                    return (
                                        <Card
                                            key={cert.name}
                                            className="bg-slate-800/40 border-slate-700/50 hover:border-blue-500/30 transition-all group"
                                        >
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-5">
                                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform", colorCls)}>
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h5 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">{cert.name}</h5>
                                                        <p className="text-slate-400 font-medium">{cert.issuer}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
