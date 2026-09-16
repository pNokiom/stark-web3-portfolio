import { ImageIcon, Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { proofOfWork } from '@/lib/portfolio-data'

export function ProofOfWorkSection() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        index="05"
        title="Proof of Work"
        description="Real work > claims."
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {proofOfWork.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 60}>
            <div className="group flex h-full flex-col justify-between gap-8 bg-card p-6 transition-colors hover:bg-accent">
              <div className="flex items-center justify-between">
                <ImageIcon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent-electric" />
                <Plus className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-accent-electric" />
              </div>
              <div>
                <h3 className="font-display text-base text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.hint}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6">
        <p className="text-sm text-muted-foreground">
          Screenshots, links and testimonials are dropped in here as real
          examples become available.
        </p>
      </Reveal>
    </section>
  )
}
