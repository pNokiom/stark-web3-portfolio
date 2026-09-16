import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

export function ProfilePhoto() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Reveal className="flex flex-col items-center">
        <div className="group relative">
          <div className="absolute -inset-3 rounded-full bg-accent-electric/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border ring-1 ring-white/5 transition-all duration-500 group-hover:border-accent-electric/60 sm:h-48 sm:w-48">
            <Image
              src={profile.photo || '/placeholder.svg'}
              alt={`${profile.name} profile photo`}
              fill
              sizes="192px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>
        <p className="mt-6 font-display text-lg text-foreground">{profile.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
      </Reveal>
    </section>
  )
}
