import '../styles/summary.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Summary() {
  return (
    <div className="summary-wrapper fade-in">
      <header className="hero-section-inline">
        <div className="hero-layout">
          <div className="profile-circle">
            <img src="/image.webp" alt="Chan Min Swe" />
          </div>

          <div className="hero-info">
            <div className="title-row">
              <div className="name-group">
                <h1 className="name-title">CHAN MIN SWE</h1>
                <p className="sub-title">CROSS PLATFORM MOBILE DEVELOPER</p>
              </div>
              
              <div className="social-links-inline">
                <a href="https://github.com/chanminswe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/chan-min-swe-670b17200/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            
            <div className="meta-cards">
              <div className="meta-card">📍 Yangon, Myanmar</div>
              <div className="meta-card">✉️ chanswe67@gmail.com</div>
              <div className="meta-card">📞 09-966650850</div>
            </div>

            <p className="bio-text">
              I’m a <strong>React Native</strong> developer focused on building fast apps while maintaining readable and clean code.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Summary;