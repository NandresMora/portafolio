'use client'

import { Badge } from '@/components/ui/badge'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Calendar } from 'lucide-react'

// ─── Animated Counter ─────────────────────────────────────────────────
interface AnimatedCounterProps {
    value: number
    suffix?: string
    label: string
    icon: React.ComponentType<{ className?: string }>
}

export function AnimatedCounter({ value, suffix = '+', label, icon: Icon }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)
        return () => clearInterval(timer)
    }, [value, isInView])

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/10"
        >
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
                {count}
                {suffix}
            </div>
            <div className="text-sm text-slate-400 font-medium">{label}</div>
        </motion.div>
    )
}

// ─── Tech Badge ───────────────────────────────────────────────────────
interface TechBadgeProps {
    children: React.ReactNode
    delay?: number
}

export function TechBadge({ children, delay = 0 }: TechBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay / 1000 }}
        >
            <Badge
                variant="outline"
                className="px-3 py-1 border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all cursor-default text-xs font-medium bg-slate-800/30"
            >
                {children}
            </Badge>
        </motion.div>
    )
}

// ─── Section Heading ──────────────────────────────────────────────────
interface SectionHeadingProps {
    icon: React.ComponentType<{ className?: string }>
    title: string
    subtitle?: string
    iconColor?: string
}

export function SectionHeading({ icon: Icon, title, subtitle, iconColor = 'text-blue-400' }: SectionHeadingProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <div className="flex items-center gap-3 mb-3">
                <div className={cn("p-2 rounded-lg bg-slate-800/80 border border-slate-700", iconColor.replace('text', 'border'))}>
                    <Icon className={cn("w-6 h-6", iconColor)} />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                    {title}
                </h3>
            </div>
            {subtitle && (
                <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
        </motion.div>
    )
}

import { cn } from '@/lib/utils'

// ─── Skill Card ───────────────────────────────────────────────────────
const COLOR_MAP: Record<string, string> = {
    blue: 'bg-blue-600/10 text-blue-400 border-blue-600/20',
    emerald: 'bg-emerald-600/10 text-emerald-400 border-emerald-600/20',
    violet: 'bg-violet-600/10 text-violet-400 border-violet-600/20',
    orange: 'bg-orange-600/10 text-orange-400 border-orange-600/20',
    pink: 'bg-pink-600/10 text-pink-400 border-pink-600/20',
    cyan: 'bg-cyan-600/10 text-cyan-400 border-cyan-600/20',
}

interface SkillCardProps {
    icon: React.ComponentType<{ className?: string }>
    title: string
    skills: string[]
    color: string
}

export function SkillCard({ icon: Icon, title, skills, color }: SkillCardProps) {
    const cls = COLOR_MAP[color] ?? 'bg-slate-700 text-white border-slate-600'
    const [bg, text] = cls.split(' ')

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/40 rounded-2xl p-6 transition-all hover:shadow-lg hover:shadow-blue-900/10 group"
        >
            <div className="flex items-center gap-3 mb-5">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", bg)}>
                    <Icon className={cn("w-5 h-5", text)} />
                </div>
                <h4 className="text-white font-bold text-lg">{title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill} className={cn("px-3 py-1 font-medium", cls)}>
                        {skill}
                    </Badge>
                ))}
            </div>
        </motion.div>
    )
}

// ─── Timeline Item ────────────────────────────────────────────────────
interface TimelineItemProps {
    company: string
    role: string
    period: string
    highlights: string[]
    isActive?: boolean
}

export function TimelineItem({ company, role, period, highlights, isActive }: TimelineItemProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-10 pb-10 last:pb-0 group"
        >
            <div className="absolute left-[13px] top-3 bottom-0 w-[2px] bg-slate-800 group-last:hidden" />
            <div
                className={cn(
                    "absolute left-0 top-[6px] w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors z-10",
                    isActive ? 'border-emerald-500 bg-emerald-500/20' : 'border-slate-700 bg-slate-900'
                )}
            >
                <div className={cn("w-2.5 h-2.5 rounded-full", isActive ? 'bg-emerald-400' : 'bg-slate-600')} />
            </div>
            <div className="bg-slate-800/30 border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700 transition-all hover:bg-slate-800/50">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                        <h4 className="text-white font-bold text-xl mb-1">{role}</h4>
                        <p className="text-blue-400 font-semibold">{company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        {isActive && (
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 font-bold uppercase text-[10px] tracking-wider">
                                Actual
                            </Badge>
                        )}
                        <span className="text-slate-500 text-xs font-mono flex items-center gap-1.5 bg-slate-900/50 px-2 py-1 rounded-md">
                            <Calendar className="w-3.5 h-3.5" /> {period}
                        </span>
                    </div>
                </div>
                <ul className="space-y-3">
                    {highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}
