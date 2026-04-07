import { useState } from 'react';
import './App.css';
import Project from './pages/Project';
import Education from './pages/Education';

function App() {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: "Cross Platform Mobile Developer",
      company: "Hana Microfinance Myanmar",
      period: "Feb 2025 — Present",
      description: "Sole developer building a production-ready internal HR operations application using React Native (Expo).",
      achievements: [
        "Implemented real-time employee attendance system using GPS location tracking.",
        "Optimized performance using React Query caching, reducing loading time by ~1.3s.",
        "Integrated native device capabilities (camera, biometric, push notifications).",
        "Handled Android production builds and iOS distribution via TestFlight."
      ],
      tech: ["React Native", "Expo", "React Query", "Sentry", "PHP"]
    },
    {
      title: "Head of Exam Centers",
      company: "Linux Lab",
      period: "March 2023 — Jan 2025",
      description: "Managed technical operations and coordinated with international teams for exam execution.",
      tech: ["Operations", "Team Management", "Technical Support"]
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="radial-glow-top"></div>

      <main className="main-content">
        {/* HERO SECTION */}
        <header className="hero-section">
          <div className="hero-layout">
            <div className="profile-circle">
              <img src="https://via.placeholder.com/400" alt="Chan Min Swe" />
            </div>
            <div className="hero-info">
              <h1 className="name-title">CHAN MIN SWE</h1>
              <p className="sub-title">CROSS PLATFORM MOBILE DEVELOPER</p>
              
              <div className="meta-cards">
                <div className="meta-card">📍 Yangon, Myanmar</div>
                <div className="meta-card">✉️ chanswe67@gmail.com</div>
                <div className="meta-card">📞 09-966650850</div>
              </div>

              <p className="bio-text">
                Specializing in <strong>React Native</strong> performance. I build high-efficiency 
                internal operations tools with robust state management and native integrations.
              </p>
            </div>
          </div>
        </header>

        {/* TAB NAVIGATION - Positioned right below summary */}
        <nav className="tab-navigation">
          <button 
            className={activeTab === 'experience' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={activeTab === 'education' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button 
            className={activeTab === 'projects' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </nav>

        {/* TAB CONTENT AREA */}
        <section className="content-area">
          {activeTab === 'experience' && (
            <div className="tab-view fade-in">
              {experiences.map((exp, i) => (
                <div key={i} className="exp-block">
                  <div className="exp-visual">
                    <div className="exp-dot"></div>
                    <div className="exp-line"></div>
                  </div>
                  <div className="exp-content">
                    <div className="exp-header">
                      <h3>{exp.title}</h3>
                      <span className="date-text">{exp.period}</span>
                    </div>
                    <p className="company-text">{exp.company}</p>
                    <p className="description-text">{exp.description}</p>
                    {exp.achievements && (
                      <div className="achievement-list">
                        {exp.achievements.map((a, j) => <p key={j}>· {a}</p>)}
                      </div>
                    )}
                    <div className="tag-row">
                      {exp.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <Education />
          )}

          {activeTab === 'projects' && (
            <Project />
          )}
        </section>
      </main>

      <footer className="footer">
        <p>CHAN MIN SWE © 2026</p>
      </footer>
    </div>
  );
}

export default App;