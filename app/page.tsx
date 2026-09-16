import { AmbientBackground } from '@/components/ambient-background'
import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { ConnectSection } from '@/components/connect-section'
import { ProfilePhoto } from '@/components/profile-photo'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'
import { ProofOfWorkSection } from '@/components/proof-of-work-section'
import { FinalCtaSection } from '@/components/final-cta-section'

export default function Page() {
  return (
    <>
      <AmbientBackground />
      <SiteNav />
      <main>
        <HeroSection />
        <ConnectSection />
        <ProfilePhoto />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProofOfWorkSection />
        <FinalCtaSection />
      </main>
    </>
  )
}
