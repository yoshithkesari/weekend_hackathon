function MoodCard({ mood }) {
  return (
    <button
      type="button"
      className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 text-left shadow-[0_18px_50px_rgba(120,114,150,0.08)] transition hover:-translate-y-1"
    >
      <div
        className={`inline-flex rounded-full bg-gradient-to-r ${mood.accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white`}
      >
        Mood
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{mood.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{mood.note}</p>
    </button>
  )
}

export default MoodCard
