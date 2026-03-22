function GradientAvatar({ label, size = 'lg', accent = 'from-violet-400 via-indigo-400 to-cyan-300' }) {
  const sizes = {
    sm: 'h-12 w-12 text-sm',
    md: 'h-16 w-16 text-lg',
    lg: 'h-24 w-24 text-2xl',
  }

  return (
    <div
      className={`grid ${sizes[size]} place-items-center rounded-full bg-gradient-to-br ${accent} font-semibold text-white shadow-[0_18px_35px_rgba(124,156,245,0.32)]`}
    >
      {label.slice(0, 1)}
    </div>
  )
}

export default GradientAvatar
