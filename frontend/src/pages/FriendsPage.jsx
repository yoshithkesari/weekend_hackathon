import GradientAvatar from '../components/GradientAvatar.jsx'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'

function FriendsPage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-700">
            Familiarity Comfort Effect
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Repeated positive contact helps trust feel natural instead of forced.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        {data.connections.map((connection, index) => (
          <div
            key={connection.name}
            className="flex flex-col gap-4 rounded-[1.6rem] border border-white/80 bg-white/85 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <GradientAvatar
                label={connection.name}
                size="md"
                accent={
                  index % 2 === 0
                    ? 'from-violet-400 via-indigo-400 to-cyan-300'
                    : 'from-emerald-400 via-cyan-400 to-sky-400'
                }
              />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {connection.name}
                </h3>
                <p className="text-sm text-slate-600">{connection.note}</p>
              </div>
            </div>
            <TrustPill tone="emerald">{connection.affinity}</TrustPill>
          </div>
        ))}
      </div>
    </ScreenShell>
  )
}

export default FriendsPage
