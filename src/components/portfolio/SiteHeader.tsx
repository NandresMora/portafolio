'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { PERSONAL } from './data'

export function SiteHeader() {
    return (
        <header className="border-b border-slate-700/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-900/80">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* Logo + Name */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/30">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-lg leading-tight">{PERSONAL.name}</h1>
                            <p className="text-slate-400 text-xs">{PERSONAL.title}</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#about" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                            Sobre mí
                        </a>
                        <a href="#proyectos" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                            Proyectos
                        </a>
                        <a href="#experience" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                            Experiencia
                        </a>
                        <a href="#education" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                            Educación
                        </a>
                        <a href="#contact" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                            Contacto
                        </a>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                                <Github className="w-5 h-5" />
                            </Button>
                        </a>
                        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                                <Linkedin className="w-5 h-5" />
                            </Button>
                        </a>
                        <a href={`mailto:${PERSONAL.email}`} aria-label="Enviar correo">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-900/30">
                                <Mail className="w-4 h-4 mr-2" />
                                Contactar
                            </Button>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
