'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { PERSONAL } from './data'

const CONTACTS = [
    {
        icon: Mail,
        label: 'Email',
        value: PERSONAL.email,
        href: `mailto:${PERSONAL.email}`,
        color: 'bg-blue-600/20 text-blue-400',
    },
    {
        icon: Phone,
        label: 'Teléfono',
        value: PERSONAL.phone,
        href: PERSONAL.phoneHref,
        color: 'bg-emerald-600/20 text-emerald-400',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: PERSONAL.linkedinLabel,
        href: PERSONAL.linkedin,
        color: 'bg-blue-600/20 text-blue-400',
        external: true,
    },
    {
        icon: Github,
        label: 'GitHub',
        value: PERSONAL.githubLabel,
        href: PERSONAL.github,
        color: 'bg-slate-700 text-white',
        external: true,
    },
]

export function ContactSection() {
    return (
        <section className="py-14" id="contact">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">Contacto</h3>
                    <p className="text-slate-400 text-sm text-center mb-8">
                        ¿Tienes una oportunidad o proyecto? Conversemos.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {CONTACTS.map(({ icon: Icon, label, value, href, color, external }) => (
                            <a
                                key={label}
                                href={href}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noopener noreferrer' : undefined}
                                className="block group"
                            >
                                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all hover:scale-105">
                                    <CardContent className="pt-5 pb-4">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-slate-400 text-xs mb-0.5">{label}</p>
                                                <p className="text-white font-medium text-sm truncate group-hover:text-blue-400 transition-colors">
                                                    {value}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
