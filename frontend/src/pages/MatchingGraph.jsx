import { Navigate, useNavigate } from 'react-router-dom'
import GradientAvatar from '../components/GradientAvatar.jsx'
import InterestChip from '../components/InterestChip.jsx'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'
import { getProfile, getSession } from '../utils/localStorage.js'

function MatchingGraph({ data }) {
  const navigate = useNavigate()
  const session = getSession()
  const profile = getProfile()

  if (!session || !profile) {
    return <Navigate to="/profile/create" replace />
  }

  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Psychological reassurance
            </p>
            <p className="mt-3 text-lg font-medium">{data.reassurance}</p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-700">
              Perceived Intelligence Effect
            </p>
            <p className="mt-2 text-sm text-slate-500">
              A visual graph reduces fear of a random uncomfortable match.
            </p>
          </div>
        </div>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.28)]">
          <div className="relative min-h-[28rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(124,156,245,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20"></div>
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center gap-3">
                <GradientAvatar label={profile.anonymousName} size="lg" />
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  {profile.anonymousName} • {profile.mood}
                </div>
              </div>
            </div>

            {data.clusters.map((cluster) => (
              <div
                key={cluster.label}
                className={`absolute ${cluster.position} rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow-lg`}
              >
                {cluster.label}
              </div>
            ))}

            {profile.interests.slice(0, 3).map((interest, index) => (
              <div
                key={interest}
                className={`absolute rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 px-4 py-2 text-sm font-medium text-white shadow-lg ${
                  index === 0
                    ? 'left-[22%] top-[14%]'
                    : index === 1
                      ? 'right-[18%] top-[54%]'
                      : 'left-[18%] bottom-[14%]'
                }`}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {data.candidates.map((candidate) => (
            <div
              key={candidate.name}
              className="rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <GradientAvatar label={candidate.name} size="md" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {candidate.name}
                    </h3>
                    <p className="text-sm text-slate-500">{candidate.mood} energy</p>
                  </div>
                </div>
                <TrustPill tone="emerald">{candidate.compatibility}% aligned</TrustPill>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {candidate.sharedInterests.map((interest) => (
                  <InterestChip key={interest} label={interest} selected />
                ))}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => navigate('/social/circle')}
            className="w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(155,140,243,0.28)]"
          >
            Continue to your social circle
          </button>
        </div>
      </div>
    </ScreenShell>
  )
}

export default MatchingGraph
