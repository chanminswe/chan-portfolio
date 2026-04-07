import { useState } from 'react';
import './App.css';
import Project from './pages/Project';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Summary from './components/Summary';
import ContactMe from './pages/ContactMe';

function App() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="portfolio-container">
      <div className="radial-glow-top"></div>

      <main className="main-content">
        <Summary />

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
         <button 
            className={activeTab === 'projects' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setActiveTab('contactme')}
          >
            Contact Me
          </button>
        </nav>

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

          {
            activeTab === 'contactme' && (
                <ContactMe />
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