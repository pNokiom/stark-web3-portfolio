import { Reveal } from '@/components/reveal'

export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        <span className="font-display text-sm text-accent-electric">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </span>
      </div>
      {description ? (
        <p className="mt-6 max-w-2xl text-balance font-display text-2xl leading-snug text-foreground md:text-3xl">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
