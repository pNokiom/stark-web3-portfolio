import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="04" title="Core Skills" />
      <Reveal>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-accent-electric hover:text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
