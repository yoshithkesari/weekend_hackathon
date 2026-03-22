import { Navigate, useNavigate } from 'react-router-dom'
import GradientAvatar from '../components/GradientAvatar.jsx'
import InterestChip from '../components/InterestChip.jsx'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'
import { getProfile, getSession } from '../utils/localStorage.js'

function FeedPage({ data }) {
  const navigate = useNavigate()
  const session = getSession()
  const profile = getProfile()

  if (!session || !profile) {
    return <Navigate to="/profile/create" replace />
  }

  const relevantFriends = data.friends.filter((friend) =>
    friend.mutualInterests.some((interest) => profile.interests.includes(interest)),
  )
  const visibleFriends = relevantFriends.length > 0 ? relevantFriends : data.friends

  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-50 to-sky-50 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-violet-600">
              Familiarity Comfort Effect
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Repeated exposure to emotionally relevant people builds trust
              without forcing public performance.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-sm text-emerald-900">{data.anonymousPrompt}</p>
            <button
              type="button"
              onClick={() => navigate('/call-interface?mode=anonymous')}
              className="mt-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-white"
            >
              Call anonymously
            </button>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        {visibleFriends.map((friend, index) => (
          <div
            key={friend.name}
            className="rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-sm"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <GradientAvatar
                  label={friend.name}
                  size="md"
                  accent={
                    index % 2 === 0
                      ? 'from-violet-400 via-indigo-400 to-cyan-300'
                      : 'from-emerald-400 via-cyan-400 to-sky-400'
                  }
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {friend.name}
                  </h3>
                  <p className="text-sm text-slate-500">{friend.vibe}</p>
                  <p className="mt-1 text-sm text-slate-600">{friend.note}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/call-interface?mode=friend&friend=${encodeURIComponent(friend.name)}`,
                    )
                  }
                  className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 px-4 py-2 text-sm font-semibold text-white"
                >
                  Connect
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/safety')}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  Safety
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {friend.mutualInterests.map((interest) => (
                <InterestChip
                  key={interest}
                  label={interest}
                  selected={profile.interests.includes(interest)}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <TrustPill tone="emerald">Shared interests reduce awkward silence</TrustPill>
              <TrustPill tone="violet">Relevant social matching</TrustPill>
            </div>
          </div>
        ))}
      </div>
    </ScreenShell>
  )
}

export default FeedPage
