import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'

function Safety({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-lime-50 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
              Perceived Safety Control
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              People feel more able to open up when safety tools are visible, immediate,
              and easy to use.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <div className="flex flex-wrap gap-2">
              {['Anonymous', 'End call anytime', 'Report available'].map((item) => (
                <TrustPill key={item} tone="emerald">
                  {item}
                </TrustPill>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {data.actions.map((action) => (
          <div
            key={action}
            className="rounded-[1.6rem] border border-white/80 bg-white/85 p-5 shadow-sm"
          >
            <p className="text-lg font-semibold text-slate-900">{action}</p>
            <p className="mt-2 text-sm text-slate-500">
              Visible control lowers emotional risk before discomfort escalates.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[1.75rem] bg-slate-950 p-6 text-white">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
          Core principles
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {data.principles.map((principle) => (
            <div key={principle} className="rounded-2xl bg-white/8 px-4 py-4 text-sm text-slate-200">
              {principle}
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  )
}

export default Safety
