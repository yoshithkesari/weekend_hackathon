import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'
import { findUserByEmail, saveUser, setSession } from '../utils/localStorage.js'

function Registration({ data }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.email.trim() || !form.password.trim()) {
      setError('A gentle start still needs an email and password.')
      return
    }

    if (findUserByEmail(form.email)) {
      setError('That email already has a mock account. Try logging in instead.')
      return
    }

    const user = {
      email: form.email.trim(),
      password: form.password,
      createdAt: new Date().toISOString(),
    }

    saveUser(user)
    setSession({ email: user.email, authenticatedAt: user.createdAt })
    navigate('/profile/create')
  }

  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-50 to-cyan-50 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-violet-600">
              Psychological hooks
            </p>
            <div className="mt-4 space-y-3">
              {data.hooks.map((hook) => (
                <p key={hook} className="rounded-2xl bg-white/80 px-4 py-3 text-sm text-slate-700">
                  {hook}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-sm text-emerald-900">
              Your account helps save progress, but your conversations can still stay anonymous.
            </p>
          </div>
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm"
        >
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a gentle, memorable password"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
            />
          </label>

          {error ? (
            <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(155,140,243,0.28)]"
          >
            Start conversation
          </button>
        </form>

        <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Emotional reassurance
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            You do not need to impress anyone here.
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Registration simply opens the door. Identity pressure, comparison,
            and public performance are kept out of the main experience.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <TrustPill tone="emerald">Private progress</TrustPill>
            <TrustPill tone="violet">Anonymous later</TrustPill>
          </div>
          <p className="mt-6 text-sm text-slate-300">
            Already have an account?{' '}
            <Link to="/login" className="text-cyan-300 underline underline-offset-4">
              Login gently
            </Link>
          </p>
        </div>
      </div>
    </ScreenShell>
  )
}

export default Registration
