import GradientAvatar from '../components/GradientAvatar.jsx'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'

function VoiceCallPage({ data }) {
  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="rounded-[1.75rem] bg-gradient-to-br from-emerald-50 to-cyan-50 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-600">
            Reduced visual judgement
          </p>
          <p className="mt-3 text-lg font-medium text-slate-900">
            Voice-only interaction increases depth of conversation.
          </p>
        </div>
      }
    >
      <div className="rounded-[2rem] bg-gradient-to-br from-teal-900 via-slate-800 to-cyan-900 p-6 text-white shadow-[0_24px_70px_rgba(24,58,71,0.28)]">
        <div className="flex flex-wrap gap-2">
          {data.indicators.map((indicator) => (
            <TrustPill key={indicator} tone="emerald">
              {indicator}
            </TrustPill>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="flex flex-col items-center gap-3">
            <GradientAvatar label={data.participants[0]} size="md" />
            <span className="text-sm text-white/80">{data.participants[0]}</span>
          </div>

          <div className="float-slow signal-pulse grid h-32 w-32 place-items-center rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-300 text-xl font-semibold text-slate-950 shadow-[0_18px_45px_rgba(110,195,244,0.32)]">
            Talk
          </div>

          <div className="flex flex-col items-center gap-3">
            <GradientAvatar
              label={data.participants[1]}
              size="md"
              accent="from-fuchsia-400 via-violet-400 to-cyan-300"
            />
            <span className="text-sm text-white/80">{data.participants[1]}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {['Mute', 'End call', 'Safety'].map((action) => (
            <button
              key={action}
              type="button"
              className={`rounded-full px-4 py-3 text-sm font-medium ${
                action === 'Safety'
                  ? 'bg-white text-slate-900'
                  : 'bg-white/12 text-white ring-1 ring-white/15'
              }`}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </ScreenShell>
  )
}

export default VoiceCallPage
