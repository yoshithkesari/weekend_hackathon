import { Link } from 'react-router-dom'
import '../App.css'

function HomePage({ data }) {
  return (
    <main className="landing-shell">
      <section className="landing-hero">
        <div className="hero-copy-card">
          <p className="hero-kicker">Emotion-first anonymous connection</p>
          <h2>You do not need to perform here.</h2>
          <p className="hero-text">
            A voice-first space for slow, thoughtful one-on-one conversations
            with strangers, designed to lower identity pressure and make human
            connection feel safe again.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="hero-primary">
              Start softly
            </Link>
            <Link to="/login" className="hero-secondary">
              Login gently
            </Link>
          </div>
        </div>

        <div className="hero-glass-card">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>
          <div className="hero-top">
            <span className="beta-pill">Voice-only beta</span>
            <span className="trust-note">No names. No photos. No followers.</span>
          </div>
          <div className="signal-bars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="avatar-pair">
            <div className="hero-avatar">A</div>
            <div className="hero-avatar alt">B</div>
          </div>
          <p className="hero-title">Someone else is also looking to talk.</p>
          <p className="hero-subtitle">Good conversations take a moment.</p>
        </div>
      </section>

      <section className="landing-journey">
        <article className="flow-surface">
          <div className="section-heading">
            <span className="step-badge">01</span>
            <div>
              <p className="section-kicker">Soft onboarding</p>
              <h3>How are you feeling today?</h3>
            </div>
          </div>
          <div className="mood-grid">
            {data.moods.cards.map((mood) => (
              <button key={mood.name} type="button" className="mood-card">
                <span className="mood-icon">Mood</span>
                <strong>{mood.name}</strong>
                <span>{mood.note}</span>
              </button>
            ))}
          </div>
        </article>

        <article className="flow-surface">
          <div className="section-heading">
            <span className="step-badge">02</span>
            <div>
              <p className="section-kicker">Conversation anchors</p>
              <h3>Pick a few things you enjoy.</h3>
            </div>
          </div>
          <p className="section-body">
            Interest prompts make starting easier and reduce awkward silence
            without turning people into public profiles.
          </p>
          <div className="chip-cloud">
            {data.interests.all.map((interest, index) => (
              <button
                key={interest}
                type="button"
                className={`interest-chip chip-tone-${(index % 4) + 1}`}
              >
                {interest}
              </button>
            ))}
          </div>
        </article>
      </section>

      <section className="landing-match">
        <article className="flow-surface wide-surface">
          <div className="section-heading">
            <span className="step-badge">03</span>
            <div>
              <p className="section-kicker">Thoughtful matching</p>
              <h3>We match energy before conversation.</h3>
            </div>
          </div>

          <div className="matching-layout">
            <div className="network-card">
              <div className="network-visual" aria-hidden="true">
                <span className="node node-center">You</span>
                <span className="node node-a">Calm</span>
                <span className="node node-b">Music</span>
                <span className="node node-c">Reading</span>
                <span className="node node-d">Voice</span>
              </div>
              <p className="network-caption">
                The waiting experience feels intentional, not random.
              </p>
            </div>

            <div className="match-stack">
              {data.homeMatches.map((match) => (
                <div key={match.name} className="match-card">
                  <div className="match-avatar">{match.name.charAt(0)}</div>
                  <div className="match-copy">
                    <strong>{match.name}</strong>
                    <span>{match.mood} energy</span>
                    <p>{match.topics.join(' • ')}</p>
                  </div>
                  <button type="button" className="match-action">
                    Interested
                  </button>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="landing-call">
        <article className="call-surface">
          <div className="call-copy">
            <p className="section-kicker">Voice-first interaction</p>
            <h3>Focus on listening.</h3>
            <p>
              No face, no feed, no performance loop. Just one private voice
              conversation with visible safety controls and mutual comfort at
              the center.
            </p>

            <div className="stat-row">
              {data.callStats.map((stat) => (
                <div key={stat.label} className="stat-pill">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="call-stage">
            <div className="call-stage-inner">
              <div className="caller">
                <div className="caller-avatar">A</div>
                <span>You</span>
              </div>
              <button type="button" className="call-button" aria-label="Connect">
                Talk
              </button>
              <div className="caller">
                <div className="caller-avatar peer">N</div>
                <span>North Star</span>
              </div>
            </div>

            <div className="call-toolbar">
              <button type="button" className="call-control">
                Mute
              </button>
              <button type="button" className="call-control">
                End
              </button>
              <button type="button" className="call-control safety">
                Safety
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="landing-aftercare">
        <article className="flow-surface">
          <div className="section-heading">
            <span className="step-badge">04</span>
            <div>
              <p className="section-kicker">Mutual comfort</p>
              <h3>The connection continues only if both people want it.</h3>
            </div>
          </div>
          <div className="reflection-panel">
            <div className="reflection-state positive">
              <span className="state-label">Positive outcome</span>
              <p>You both felt comfortable talking.</p>
            </div>
            <div className="reflection-state neutral">
              <span className="state-label">Neutral outcome</span>
              <p>Every conversation is a step.</p>
            </div>
            <div className="reflection-state quiet">
              <span className="state-label">No match</span>
              <p>Not every conversation connects. That is okay.</p>
            </div>
          </div>
        </article>

        <article className="flow-surface">
          <div className="section-heading">
            <span className="step-badge">05</span>
            <div>
              <p className="section-kicker">Safety visibility</p>
              <h3>Trust should be visible, not hidden.</h3>
            </div>
          </div>
          <ul className="safety-list">
            {data.safety.actions.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="quote-card">
            <p>"A calm space for people who want to be heard, not watched."</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default HomePage
