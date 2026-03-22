import GradientAvatar from '../components/GradientAvatar.jsx'
import InterestChip from '../components/InterestChip.jsx'
import RadarChart from '../components/RadarChart.jsx'
import ScreenShell from '../components/ScreenShell.jsx'

function MatchPreviewPage({ data }) {
  const { profile } = data

  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={<RadarChart items={profile.radar} />}
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-violet-100 via-white to-cyan-100 p-6">
          <div className="flex items-center gap-4">
            <GradientAvatar label={profile.anonymousName} accent="from-violet-400 via-fuchsia-400 to-cyan-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Anonymous preview
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                {profile.anonymousName}
              </h3>
              <p className="text-sm text-slate-600">{profile.mood} energy</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            {profile.summary}
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-violet-500">
            Shared signals
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {profile.interests.map((interest) => (
              <InterestChip key={interest} label={interest} selected />
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-slate-950 px-4 py-4 text-sm text-slate-100">
            {data.emotionalEffect}
          </p>
        </div>
      </div>
    </ScreenShell>
  )
}

export default MatchPreviewPage
