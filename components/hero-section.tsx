import { ArrowRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pt-28 pb-20"
    >
      <div className="max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/40 px-3.5 py-1.5 text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-electric opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-electric" />
          </span>
          {profile.status}
        </div>

        <h1 className="text-pretty font-display text-6xl font-medium leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          {profile.name}
        </h1>
        <p className="mt-5 font-display text-lg text-muted-foreground sm:text-xl md:text-2xl">
          {profile.role}
        </p>

        <p className="mt-8 max-w-xl text-balance border-l border-border pl-5 text-base leading-relaxed text-foreground/80 md:text-lg">
          {profile.quote}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Status</p>
            <p className="mt-1.5 flex items-center gap-2 font-display text-sm text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-electric" />
              {profile.status}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Timezone</p>
            <p className="mt-1.5 font-display text-sm text-foreground">{profile.timezone}</p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#connect"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-electric"
          >
            Let&apos;s Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
