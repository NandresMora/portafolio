import { SiteHeader } from '@/components/portfolio/SiteHeader'
import { SiteFooter } from '@/components/portfolio/SiteFooter'
import { HeroSection } from '@/components/portfolio/HeroSection'
import { WhatIDoSection } from '@/components/portfolio/WhatIDoSection'
import { SkillsSection } from '@/components/portfolio/SkillsSection'
import { ProjectsSection } from '@/components/portfolio/ProjectsSection'
import { ExperienceSection } from '@/components/portfolio/ExperienceSection'
import { EducationSection } from '@/components/portfolio/EducationSection'
import { CompetenciesSection } from '@/components/portfolio/CompetenciesSection'
import { ContactSection } from '@/components/portfolio/ContactSection'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WhatIDoSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CompetenciesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
