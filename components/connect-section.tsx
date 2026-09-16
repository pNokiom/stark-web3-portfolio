import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ContactLinks } from '@/components/contact-links'

export function ConnectSection() {
  return (
    <section id="connect" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="01" title="Let's Connect" />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-4xl">
            Reach out on your platform of choice.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Available for community, moderation and growth conversations across
            Web3. Pick whichever channel works best for you.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ContactLinks />
        </Reveal>
      </div>
    </section>
  )
}
