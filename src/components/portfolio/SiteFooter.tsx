'use client'

import { Separator } from '@/components/ui/separator'
import { Github, Linkedin, Mail } from 'lucide-react'
import { PERSONAL } from './data'

export function SiteFooter() {
    const year = new Date().getFullYear()

    return (
        <footer className="mt-auto border-t border-slate-700/30 py-6 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">
                        © {year} {PERSONAL.fullName} · Ingeniero de Sistemas & Desarrollador Web Jr.
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href={PERSONAL.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5"
                        >
                            <Github className="w-3.5 h-3.5" /> GitHub
                        </a>
                        <Separator orientation="vertical" className="h-4 bg-slate-700" />
                        <a
                            href={PERSONAL.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5"
                        >
                            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                        </a>
                        <Separator orientation="vertical" className="h-4 bg-slate-700" />
                        <a
                            href={`mailto:${PERSONAL.email}`}
                            className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5"
                        >
                            <Mail className="w-3.5 h-3.5" /> Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
