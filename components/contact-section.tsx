import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { contact, profile } from '@/lib/portfolio-data'

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="05" title="Contact" />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <h2
            className="text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl"
            dangerouslySetInnerHTML={{ __html: contact.headline }}
          />
          <p
            className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: contact.text }}
          />
        </Reveal>
        <Reveal delay={100}>
          <ul className="divide-y divide-border border-y border-border">
            {contact.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between py-5 transition-colors"
                >
                  <span className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-display text-foreground transition-colors group-hover:text-accent-electric">
                    {link.value}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
    </section>
  )
}
