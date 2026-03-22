import ScreenShell from '../components/ScreenShell.jsx'

function EmptyStatePage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Emotional reassurance
          </p>
          <p className="mt-3 text-lg font-medium">
            Gentle language keeps people from feeling rejected by the product.
          </p>
        </div>
      }
    >
      <div className="grid min-h-[22rem] place-items-center rounded-[2rem] border border-dashed border-slate-300 bg-white/75 p-8 text-center">
        <div className="max-w-lg">
          <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-violet-300 via-fuchsia-300 to-cyan-300 opacity-90 shadow-[0_16px_40px_rgba(155,140,243,0.32)]"></div>
          <p className="mt-6 text-2xl font-semibold text-slate-900">
            {data.supportiveLines[0]}
          </p>
          <p className="mt-3 text-sm text-slate-600">{data.supportiveLines[1]}</p>
        </div>
      </div>
    </ScreenShell>
  )
}

export default EmptyStatePage
