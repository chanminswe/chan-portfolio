import '../styles/summary.css';

function Summary() {
  return (
    <div className="summary-wrapper fade-in">
      <header className="hero-section-inline">
        <div className="hero-layout">
          <div className="profile-circle">
            <img src="/image.webp" alt="Chan Min Swe" />
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
              I’m a <strong>React Native</strong> developer focused on building fast app while maintaining readable and clean code.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Summary;