import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AnonymousIdentityPage from './pages/AnonymousIdentityPage.jsx'
import Registration from './pages/Registration.jsx'
import Login from './pages/Login.jsx'
import ProfileCreation from './pages/ProfileCreation.jsx'
import MatchingGraph from './pages/MatchingGraph.jsx'
import FeedPage from './pages/FeedPage.jsx'
import CallingInterFace from './pages/CallingInterFace.jsx'
import Safety from './pages/Safety.jsx'
import InterestSelectionPage from './pages/InterestSelectionPage.jsx'
import MoodSelectionPage from './pages/MoodSelectionPage.jsx'
import MatchingVisualizationPage from './pages/MatchingVisualizationPage.jsx'
import MatchPreviewPage from './pages/MatchPreviewPage.jsx'
import VoiceCallPage from './pages/VoiceCallPage.jsx'
import MutualInterestPage from './pages/MutualInterestPage.jsx'
import FriendsPage from './pages/FriendsPage.jsx'
import EmptyStatePage from './pages/EmptyStatePage.jsx'
import { appMockData } from './mockData/appMockData.js'
import { clearSession } from './utils/localStorage.js'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/register', label: 'Register' },
  { to: '/login', label: 'Login' },
  { to: '/profile/create', label: 'Profile' },
  { to: '/matching-graph', label: 'Match Graph' },
  { to: '/social/circle', label: 'Social Circle' },
  { to: '/call-interface', label: 'Call' },
  { to: '/identity', label: 'Identity' },
  { to: '/safety', label: 'Safety' },
]

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen px-3 py-3 sm:px-4 sm:py-4">
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 shadow-[0_25px_90px_rgba(125,118,154,0.18)] backdrop-blur-xl">
        <header className="border-b border-slate-200/70 px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-500">
                Emotion-first anonymous voice platform
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A calm social experience built for honest voice connection.
              </h1>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The current flow uses mock data and local storage, so we can refine
                the emotional UX now and wire the original backend later.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {appMockData.trustHooks.map((hook) => (
                <span
                  key={hook}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                >
                  {hook}
                </span>
              ))}
              <button
                type="button"
                onClick={() => {
                  clearSession()
                  navigate('/login')
                }}
                className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white"
              >
                Logout
              </button>
            </div>
          </div>

          <nav className="mt-5 flex flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15'
                      : 'bg-white/80 text-slate-600 hover:bg-violet-50 hover:text-violet-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="flex-1 px-4 py-4 sm:px-6 sm:py-6">
          <Routes>
            <Route
              path="/"
              element={<HomePage data={appMockData} />}
            />
            <Route
              path="/register"
              element={<Registration data={appMockData.auth.registration} />}
            />
            <Route
              path="/login"
              element={<Login data={appMockData.auth.login} />}
            />
            <Route
              path="/profile/create"
              element={<ProfileCreation data={appMockData.profileCreation} />}
            />
            <Route
              path="/matching-graph"
              element={<MatchingGraph data={appMockData.matchingGraphExperience} />}
            />
            <Route
              path="/social/circle"
              element={<FeedPage data={appMockData.socialCircle} />}
            />
            <Route
              path="/call-interface"
              element={<CallingInterFace data={appMockData.callingExperience} />}
            />
            <Route
              path="/identity"
              element={<AnonymousIdentityPage data={appMockData.identity} />}
            />
            <Route
              path="/interests"
              element={<InterestSelectionPage data={appMockData.interests} />}
            />
            <Route
              path="/mood"
              element={<MoodSelectionPage data={appMockData.moods} />}
            />
            <Route
              path="/matching"
              element={<MatchingVisualizationPage data={appMockData.matching} />}
            />
            <Route
              path="/preview"
              element={<MatchPreviewPage data={appMockData.matchPreview} />}
            />
            <Route
              path="/call"
              element={<VoiceCallPage data={appMockData.voiceCall} />}
            />
            <Route
              path="/mutual"
              element={<MutualInterestPage data={appMockData.mutualInterest} />}
            />
            <Route
              path="/friends"
              element={<FriendsPage data={appMockData.friends} />}
            />
            <Route
              path="/safety"
              element={<Safety data={appMockData.safetyExperience} />}
            />
            <Route
              path="/gentle-empty"
              element={<EmptyStatePage data={appMockData.emptyState} />}
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
