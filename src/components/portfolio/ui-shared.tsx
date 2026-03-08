'use client'

import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

// ─── Animated Counter ─────────────────────────────────────────────────
interface AnimatedCounterProps {
    value: number
    suffix?: string
    label: string
    icon: React.ComponentType<{ className?: string }>
}

export function AnimatedCounter({ value, suffix = '+', label, icon: Icon }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
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
    }, [value])

    return (
        <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-600/50 transition-all hover:scale-105">
            <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
                {count}
                {suffix}
            </div>
            <div className="text-sm text-slate-400">{label}</div>
        </div>
    )
}

// ─── Tech Badge ───────────────────────────────────────────────────────
interface TechBadgeProps {
    children: React.ReactNode
    delay?: number
}

export function TechBadge({ children, delay = 0 }: TechBadgeProps) {
    return (
        <Badge
            variant="outline"
            className="border-slate-600 text-slate-300 hover:border-blue-600 hover:text-blue-400 hover:bg-blue-600/10 transition-all cursor-default"
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </Badge>
    )
}

// ─── GraduationCap SVG ────────────────────────────────────────────────
export function GraduationCap({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
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
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Icon className={`w-6 h-6 ${iconColor}`} />
                {title}
            </h3>
            {subtitle && <p className="text-slate-400 text-sm mt-1">{subtitle}</p>}
        </div>
    )
}

// ─── Skill Card ───────────────────────────────────────────────────────
const COLOR_MAP: Record<string, string> = {
    blue: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    emerald: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
    violet: 'bg-violet-600/20 text-violet-400 border-violet-600/30',
    orange: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
    pink: 'bg-pink-600/20 text-pink-400 border-pink-600/30',
    cyan: 'bg-cyan-600/20 text-cyan-400 border-cyan-600/30',
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
        <div className="bg-slate-800/50 border border-slate-700 hover:border-blue-600/30 rounded-xl p-5 transition-all hover:scale-105 group">
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${text}`} />
                </div>
                <h4 className="text-white font-semibold">{title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill} className={cls}>
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    )
}

// ─── Timeline Item ────────────────────────────────────────────────────
import { CheckCircle2, Calendar } from 'lucide-react'

interface TimelineItemProps {
    company: string
    role: string
    period: string
    highlights: string[]
    isActive?: boolean
}

export function TimelineItem({ company, role, period, highlights, isActive }: TimelineItemProps) {
    return (
        <div className="relative pl-8 pb-8 last:pb-0 group">
            <div className="absolute left-[11px] top-3 bottom-0 w-px bg-slate-700 group-last:hidden" />
            <div
                className={`absolute left-0 top-[6px] w-6 h-6 rounded-full border-2 flex items-center justify-center ${isActive ? 'border-emerald-500 bg-emerald-500/20' : 'border-slate-600 bg-slate-800'
                    }`}
            >
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-500'}`} />
            </div>
            <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-white font-semibold">{role}</h4>
                    {isActive && (
                        <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30 text-xs">
                            Actual
                        </Badge>
                    )}
                </div>
                <p className="text-blue-400 text-sm font-medium">{company}</p>
                <p className="text-slate-500 text-xs mb-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {period}
                </p>
                <ul className="space-y-1">
                    {highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 flex-shrink-0 mt-0.5" />
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
