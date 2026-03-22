import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import GradientAvatar from '../components/GradientAvatar.jsx'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'
import { getProfile, getSession } from '../utils/localStorage.js'

function CallingInterFace({ data }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const session = getSession()
  const profile = getProfile()

  if (!session || !profile) {
    return <Navigate to="/login" replace />
  }

  const mode = searchParams.get('mode') || 'anonymous'
  const friendName = searchParams.get('friend') || 'North Star'
  const peerLabel = mode === 'anonymous' ? 'Anonymous voice' : friendName

  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-cyan-50 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
              Trust hooks
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.trustCopy.map((item) => (
                <TrustPill key={item} tone="emerald">
                  {item}
                </TrustPill>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-700">
              Reduced Visual Judgement
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Voice-first design increases emotional depth while reducing bias.
            </p>
          </div>
        </div>
      }
    >
      <div className="rounded-[2rem] bg-gradient-to-br from-teal-900 via-slate-800 to-cyan-900 p-6 text-white shadow-[0_24px_70px_rgba(24,58,71,0.28)]">
        <div className="flex flex-wrap gap-2">
          <TrustPill tone="emerald">{mode === 'anonymous' ? 'Anonymous call' : 'Friend call'}</TrustPill>
          <TrustPill tone="slate">{profile.mood} energy</TrustPill>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="flex flex-col items-center gap-3">
            <GradientAvatar label={profile.anonymousName} size="md" />
            <span className="text-sm text-white/80">{profile.anonymousName}</span>
          </div>

          <div className="float-slow signal-pulse grid h-32 w-32 place-items-center rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-300 text-xl font-semibold text-slate-950 shadow-[0_18px_45px_rgba(110,195,244,0.32)]">
            Talk
          </div>

          <div className="flex flex-col items-center gap-3">
            <GradientAvatar
              label={peerLabel}
              size="md"
              accent="from-fuchsia-400 via-violet-400 to-cyan-300"
            />
            <span className="text-sm text-white/80">{peerLabel}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {data.controls.map((control) => (
            <button
              key={control}
              type="button"
              onClick={() => {
                if (control === 'Safety') {
                  navigate('/safety')
                }
              }}
              className={`rounded-full px-4 py-3 text-sm font-medium ${
                control === 'Safety'
                  ? 'bg-white text-slate-900'
                  : 'bg-white/12 text-white ring-1 ring-white/15'
              }`}
            >
              {control}
            </button>
          ))}
        </div>
      </div>
    </ScreenShell>
  )
}

export default CallingInterFace
