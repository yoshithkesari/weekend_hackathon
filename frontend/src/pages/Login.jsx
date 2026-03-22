import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScreenShell from '../components/ScreenShell.jsx'
import TrustPill from '../components/TrustPill.jsx'
import { findUserByEmail, setSession } from '../utils/localStorage.js'

function Login({ data }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: data.demoUser.email,
    password: data.demoUser.password,
  })
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const storedUser = findUserByEmail(form.email)
    const isDemoUser =
      form.email === data.demoUser.email && form.password === data.demoUser.password

    if (!isDemoUser && (!storedUser || storedUser.password !== form.password)) {
      setError('We could not find a calm re-entry for those credentials yet.')
      return
    }

    setSession({
      email: form.email.trim(),
      authenticatedAt: new Date().toISOString(),
    })
    navigate('/profile/create')
  }

  return (
    <ScreenShell
      label={data.screenLabel}
      title={data.title}
      description={data.description}
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-sky-50 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700">
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
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-700">Mock login ready</p>
            <p className="mt-2 text-sm text-slate-500">
              Use the prefilled demo credentials or a mock account you registered locally.
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
            className="w-full rounded-full bg-gradient-to-r from-slate-900 to-violet-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.2)]"
          >
            Enter softly
          </button>
        </form>

        <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Familiarity comfort
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            Returning should feel calm, not transactional.
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Re-entry is designed to feel emotionally light, so users can continue
            where they left off without social performance pressure.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <TrustPill tone="emerald">Demo login ready</TrustPill>
            <TrustPill tone="slate">Local progress restored</TrustPill>
          </div>
          <p className="mt-6 text-sm text-slate-300">
            Need an account first?{' '}
            <Link to="/register" className="text-cyan-300 underline underline-offset-4">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </ScreenShell>
  )
}

export default Login
