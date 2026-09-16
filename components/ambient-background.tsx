export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 3%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 3%) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 80%)',
        }}
      />
      {/* subtle drifting electric glow */}
      <div
        className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--accent-electric), transparent 65%)',
          animation: 'drift 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 right-[-10rem] h-[28rem] w-[28rem] rounded-full opacity-[0.12] blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--accent-electric), transparent 70%)',
          animation: 'drift 22s ease-in-out infinite reverse',
        }}
      />
    </div>
  )
}
