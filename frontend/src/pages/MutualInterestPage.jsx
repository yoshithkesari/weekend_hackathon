import ScreenShell from '../components/ScreenShell.jsx'

function MutualInterestPage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="rounded-[1.5rem] bg-emerald-50 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
            Gentle fallback
          </p>
          <p className="mt-3 text-lg font-medium text-emerald-950">
            {data.reassurance}
          </p>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {data.actions.map((action) => (
          <button
            key={action}
            type="button"
            className={`rounded-[1.5rem] px-5 py-10 text-center text-lg font-semibold shadow-sm transition hover:-translate-y-1 ${
              action === 'Interested'
                ? 'bg-gradient-to-r from-violet-500 to-cyan-400 text-white'
                : action === 'Report'
                  ? 'bg-rose-50 text-rose-700 ring-1 ring-rose-100'
                  : 'bg-white text-slate-700 ring-1 ring-slate-200'
            }`}
          >
            {action}
          </button>
        ))}
      </div>
    </ScreenShell>
  )
}

export default MutualInterestPage
