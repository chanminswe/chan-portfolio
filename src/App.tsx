import { useState } from 'react'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('summary')

  return (
    <div className="portfolio-container">
      {/* Top Section: Profile Header */}
      <header className="hero-header">
        <div className="profile-wrapper">
          <div className="profile-circle">
            <img src="https://via.placeholder.com/300" alt="Profile Placeholder" />
          </div>
          <div className="header-text">
            <h1>CHAN MIN</h1>
            <p className="role-title">Cross-Platform Mobile Developer [cite: 3, 6]</p>
            <div className="location-tags">
              <span className="tag-box">📍 Yangon, Myanmar [cite: 5]</span>
              <span className="tag-box">💼 Open to Projects [cite: 8]</span>
            </div>
            
            <p className="bio-text">
              I'm a mobile developer specializing in <strong>React Native</strong> and 
              modern architecture[cite: 6]. I've built and shipped internal HR 
              solutions for attendance, approvals, and workflows[cite: 7, 24].
            </p>

            <div className="looking-for">
              <h3>Looking For</h3>
              <ul>
                <li>→ Projects [cite: 8]</li>
                <li>→ Mobile Development Roles [cite: 23]</li>
                <li>→ Full-stack Opportunities [cite: 19]</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Section: The Project/Detail Switcher */}
      <section className="project-split-view">
        <div className="view-left">
          <div className="switcher-nav">
            <button 
              className={activeView === 'summary' ? 'active' : ''} 
              onClick={() => setActiveView('summary')}
            >
              Summary
            </button>
            <button 
              className={activeView === 'tech' ? 'active' : ''} 
              onClick={() => setActiveView('tech')}
            >
              Technologies
            </button>
          </div>

          <div className="scroll-content">
            {activeView === 'summary' ? (
              <div className="fade-in">
                <h2>Internal HR Operations App</h2>
                <p className="project-desc">
                  A comprehensive solution for corporate workflows including 
                  real-time employee attendance using <strong>GPS tracking</strong>[cite: 25], 
                  multi-level approval workflows [cite: 26], and native device integrations[cite: 27].
                </p>
                <div className="experience-snip">
                  <span className="company">Hana Microfinance [cite: 22]</span>
                  <span className="duration">2026 - Present [cite: 23]</span>
                </div>
              </div>
            ) : (
              <div className="fade-in">
                <h2>Technical Stack [cite: 13]</h2>
                <div className="tech-grid">
                  <div className="tech-card">
                    <h4>Frontend [cite: 14]</h4>
                    <p>React Native, TypeScript, Expo, React</p>
                  </div>
                  <div className="tech-card">
                    <h4>State & Data [cite: 15]</h4>
                    <p>React Query, Redux, SQLite, AsyncStorage</p>
                  </div>
                  <div className="tech-card">
                    <h4>Backend [cite: 15]</h4>
                    <p>Node.js, Express, MongoDB, PHP, Odoo</p>
                  </div>
                  <div className="tech-card">
                    <h4>DevOps [cite: 16, 31]</h4>
                    <p>TestFlight, Android Production, Power Automate</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="view-right">
          <div className="phone-mockup">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              src="/Simulator Screen Recording - iPhone 17 Pro - 2026-04-06 at 20.11.55 (1).mov"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App