function RadarChart({ items }) {
  return (
    <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.28)]">
      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
        Conversation chemistry
      </p>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.axis}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>{item.axis}</span>
              <span className="text-slate-400">{item.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadarChart
