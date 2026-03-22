import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'

function SafetyCenterPage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-lime-50 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
            Trust note
          </p>
          <p className="mt-3 text-lg font-medium text-slate-900">
            {data.trustNote}
          </p>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {data.actions.map((action) => (
          <div
            key={action}
            className="rounded-[1.5rem] border border-slate-200 bg-white/85 p-5"
          >
            <TrustPill tone="slate">Safety action</TrustPill>
            <p className="mt-4 text-lg font-semibold text-slate-900">{action}</p>
          </div>
        ))}
      </div>
    </ScreenShell>
  )
}

export default SafetyCenterPage
