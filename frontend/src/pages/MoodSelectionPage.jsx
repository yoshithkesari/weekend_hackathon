import MoodCard from '../components/MoodCard.jsx'
import ScreenShell from '../components/ScreenShell.jsx'

function MoodSelectionPage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-50 to-sky-50 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-violet-500">
              Microcopy
            </p>
            <p className="mt-3 text-lg font-medium text-slate-900">
              {data.helperCopy}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-700">
              Emotional effect
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Users feel understood before interaction begins.
            </p>
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {data.cards.map((mood) => (
          <MoodCard key={mood.name} mood={mood} />
        ))}
      </div>
    </ScreenShell>
  )
}

export default MoodSelectionPage
