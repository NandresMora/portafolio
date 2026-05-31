'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Code2, Menu, X } from 'lucide-react'
import { PERSONAL } from './data'
import { cn } from '@/lib/utils'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#contact', label: 'Contacto' },
]

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
            isScrolled 
                ? "bg-slate-900/90 backdrop-blur-md border-slate-700/50 py-3" 
                : "bg-transparent border-transparent py-5"
        )}>
            <nav className="container mx-auto px-6">
                <div className="flex items-center justify-between">

                    {/* Logo + Name */}
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-white font-bold text-lg leading-tight">{PERSONAL.name}</h1>
                            <p className="text-blue-400 text-[10px] font-medium uppercase tracking-wider">{PERSONAL.title}</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a 
                                key={link.href}
                                href={link.href} 
                                className="text-slate-400 hover:text-white text-sm font-medium transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Actions & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2 mr-2 border-r border-slate-700/50 pr-4">
                            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-white hover:bg-slate-800">
                                    <Github className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-white hover:bg-slate-800">
                                    <Linkedin className="w-5 h-5" />
                                </Button>
                            </a>
                        </div>
                        
                        <a href={`mailto:${PERSONAL.email}`} className="hidden sm:block">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 px-5">
                                <Mail className="w-4 h-4 mr-2" />
                                Contactar
                            </Button>
                        </a>

                        {/* Mobile Menu Trigger */}
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-white">
                                        <Menu className="w-6 h-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="bg-slate-900 border-slate-800 p-0 w-[300px]">
                                    <SheetHeader className="p-6 border-b border-slate-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                                <Code2 className="w-5 h-5 text-white" />
                                            </div>
                                            <SheetTitle className="text-white text-left font-bold">{PERSONAL.name}</SheetTitle>
                                        </div>
                                    </SheetHeader>
                                    <div className="flex flex-col py-6">
                                        {NAV_LINKS.map((link) => (
                                            <a 
                                                key={link.href}
                                                href={link.href}
                                                className="px-6 py-4 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors text-lg font-medium"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <div className="mt-auto p-6 flex flex-col gap-4">
                                            <div className="flex gap-4">
                                                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white">
                                                    <Github className="w-6 h-6" />
                                                </a>
                                                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white">
                                                    <Linkedin className="w-6 h-6" />
                                                </a>
                                            </div>
                                            <Button className="w-full bg-blue-600">
                                                <Mail className="w-4 h-4 mr-2" />
                                                Enviar Correo
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
