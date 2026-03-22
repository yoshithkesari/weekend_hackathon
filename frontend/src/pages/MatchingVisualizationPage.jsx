import ScreenShell from '../components/ScreenShell.jsx'

function MatchingVisualizationPage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Psychological effect
            </p>
            <p className="mt-3 text-lg font-medium">
              Perceived Intelligence Effect
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-sm text-emerald-900">{data.reassurance}</p>
          </div>
        </div>
      }
    >
      <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-violet-950 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.28)] sm:p-6">
        <div className="relative min-h-[22rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(124,156,245,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20"></div>
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10"></div>
          {data.nodes.map((node) => (
            <div
              key={node.label}
              className={`absolute ${node.position} rounded-full px-4 py-2 text-sm font-medium shadow-lg ${
                node.emphasis
                  ? 'signal-pulse bg-gradient-to-r from-violet-500 to-sky-400 text-white'
                  : 'bg-white/90 text-slate-800'
              }`}
            >
              {node.label}
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  )
}

export default MatchingVisualizationPage
