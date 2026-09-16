import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experiences } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        index="03"
        title="Experience & Impact"
        description="Roles across Web3 communities, ambassador programs and ecosystem growth."
      />
      <div className="grid gap-4 md:gap-5">
        {experiences.map((exp, i) => (
          <Reveal as="article" key={exp.company} delay={(i % 2) * 80}>
            <div className="group rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent-electric/40 md:p-8">
              <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-accent-electric md:text-2xl">
                    {exp.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-accent-electric/90">
                    {exp.role}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground/70">
                  Impact
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {exp.impact.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
