import { Reveal } from '@/components/reveal'
import { ContactLinks } from '@/components/contact-links'
import { profile } from '@/lib/portfolio-data'

export function FinalCtaSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Let&apos;s build something in Web3.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Open to remote community, moderation, growth and ecosystem
              opportunities.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ContactLinks />
          </Reveal>
        </div>

        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built for Web3.
          </p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}
