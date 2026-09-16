import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { about } from '@/lib/portfolio-data'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="02" title="About" />
      <Reveal>
        <p className="max-w-3xl text-balance font-display text-2xl leading-snug text-foreground/90 md:text-3xl">
          {about}
        </p>
      </Reveal>
    </section>
  )
}
