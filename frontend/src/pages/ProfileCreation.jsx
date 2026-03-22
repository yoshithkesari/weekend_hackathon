import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import GradientAvatar from '../components/GradientAvatar.jsx'
import InterestChip from '../components/InterestChip.jsx'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'
import {
  assignAnonymousName,
  getProfile,
  getSession,
  saveProfile,
} from '../utils/localStorage.js'

function ProfileCreation({ data }) {
  const navigate = useNavigate()
  const session = getSession()
  const storedProfile = getProfile()
  const [anonymousName] = useState(
    storedProfile?.anonymousName || assignAnonymousName(data.anonymousNames),
  )
  const [selectedInterests, setSelectedInterests] = useState(
    storedProfile?.interests || data.interests.slice(0, 3),
  )
  const [selectedMood, setSelectedMood] = useState(
    storedProfile?.mood || data.moods[0],
  )

  if (!session) {
    return <Navigate to="/login" replace />
  }

  function toggleInterest(interest) {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest].slice(-5),
    )
  }

  function handleSave() {
    saveProfile({
      email: session.email,
      anonymousName,
      interests: selectedInterests,
      mood: selectedMood,
      updatedAt: new Date().toISOString(),
    })
    navigate('/matching-graph')
  }

  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-violet-100 via-white to-cyan-100 p-6">
            <div className="flex items-center gap-4">
              <GradientAvatar label={anonymousName || 'A'} />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Auto-assigned private name
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  {anonymousName}
                </h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Identity is softened automatically so people can lead with feeling,
              not appearance or status.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
              Psychological hooks
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.hooks.map((hook) => (
                <TrustPill key={hook} tone="emerald">
                  {hook}
                </TrustPill>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        <section className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-700">Choose your interests</p>
          <p className="mt-2 text-sm text-slate-500">
            Shared interests create easier conversations.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {data.interests.map((interest) => (
              <button key={interest} type="button" onClick={() => toggleInterest(interest)}>
                <InterestChip
                  label={interest}
                  selected={selectedInterests.includes(interest)}
                />
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-700">Choose your mood</p>
          <p className="mt-2 text-sm text-slate-500">
            Your mood helps us connect you with the right energy.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.moods.map((mood) => (
              <button
                key={mood}
                type="button"
                onClick={() => setSelectedMood(mood)}
                className={`rounded-[1.4rem] px-4 py-4 text-left text-sm font-medium transition ${
                  selectedMood === mood
                    ? 'bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 text-white shadow-[0_15px_30px_rgba(155,140,243,0.28)]'
                    : 'bg-slate-50 text-slate-700 ring-1 ring-slate-200'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </section>

        <button
          type="button"
          onClick={handleSave}
          className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(155,140,243,0.28)]"
        >
          Save profile and continue
        </button>
      </div>
    </ScreenShell>
  )
}

export default ProfileCreation
