import { ArrowUpRight } from 'lucide-react'
import { contactLinks } from '@/lib/portfolio-data'

export function ContactLinks() {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {contactLinks.map((link) => {
        const external = link.href.startsWith('http')
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between gap-4 py-5 transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {link.label}
              </span>
              <span className="inline-flex items-center gap-1.5 font-display text-sm text-foreground transition-colors group-hover:text-accent-electric sm:text-base">
                {link.value}
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
