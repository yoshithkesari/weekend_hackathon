function InterestChip({ label, selected = false }) {
  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        selected
          ? 'bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 text-white shadow-[0_15px_30px_rgba(155,140,243,0.28)]'
          : 'bg-white text-slate-700 shadow-sm ring-1 ring-slate-200'
      }`}
    >
      {label}
    </span>
  )
}

export default InterestChip
