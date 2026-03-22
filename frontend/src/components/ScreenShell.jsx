function ScreenShell({ label, title, description, children, aside }) {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-white/95 to-stone-50/80 p-6 shadow-[0_24px_70px_rgba(120,114,150,0.12)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-500">
          {label}
        </p>
        <h2 className="text-display mt-3 text-4xl tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
        <div className="mt-8">{children}</div>
      </div>

      <aside className="rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_24px_70px_rgba(120,114,150,0.1)] backdrop-blur-xl sm:p-8">
        {aside}
      </aside>
    </section>
  )
}

export default ScreenShell
