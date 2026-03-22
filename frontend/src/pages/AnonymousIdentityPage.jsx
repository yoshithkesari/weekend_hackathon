import GradientAvatar from '../components/GradientAvatar.jsx'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'

function AnonymousIdentityPage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-6">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-violet-100 via-white to-cyan-100 p-6">
            <div className="flex items-center gap-4">
              <GradientAvatar label={data.anonymousName} />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Anonymous profile
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  {data.anonymousName}
                </h3>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {data.profileRules.map((rule) => (
                <TrustPill key={rule}>{rule}</TrustPill>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-700">
              Identity Shielding Effect
            </p>
            <p className="mt-2 text-sm text-slate-500">
              People speak more honestly when appearance and status signals are
              removed.
            </p>
          </div>
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Microcopy hooks
          </p>
          <div className="mt-4 space-y-3">
            {data.privacyCopy.map((line) => (
              <p key={line} className="text-xl font-medium">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50/80 p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
            Emotional benefit
          </p>
          <ul className="mt-4 space-y-3 text-sm text-emerald-900">
            {data.benefits.map((benefit) => (
              <li key={benefit} className="rounded-2xl bg-white/80 px-4 py-3">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScreenShell>
  )
}

export default AnonymousIdentityPage
