import InterestChip from '../components/InterestChip.jsx'
import ScreenShell from '../components/ScreenShell.jsx'

function InterestSelectionPage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-orange-50 to-rose-50 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-rose-500">
              Emotional effect
            </p>
            <p className="mt-3 text-lg font-medium text-slate-900">
              {data.emotionalEffect}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-700">
              Similarity Attraction Theory
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Shared themes give people an easy first bridge into conversation.
            </p>
          </div>
        </div>
      }
    >
      <div className="rounded-[1.75rem] bg-white/80 p-6 shadow-sm ring-1 ring-slate-200/70">
        <p className="text-sm text-slate-600">
          Select tags that feel natural right now.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {data.all.map((interest) => (
            <InterestChip
              key={interest}
              label={interest}
              selected={data.selected.includes(interest)}
            />
          ))}
        </div>
      </div>
    </ScreenShell>
  )
}

export default InterestSelectionPage
