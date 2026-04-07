import { useState } from 'react';
import './App.css';
import Project from './pages/Project';
import Education from './pages/Education';
import Experience from './pages/Experience';

function App() {
  const [activeTab, setActiveTab] = useState('experience');

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
            <Experience />
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