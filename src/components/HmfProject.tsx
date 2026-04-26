import '../styles/project.css';
import hrDemoVideo from '/hmf.mov';
import hrImagePreview from '/preview.png';

type HMFProjectProps = {
    isVisible : boolean;
}

function HmfProject({isVisible} : HMFProjectProps) {
  return (
    <>
    <div className="project-text">
        <div className="project-badge">0 → 1 Full Ownership</div>
        <h3>Hana HR Operations Suite</h3>
        <p className="project-intro">
          Architected and developed a production-ready enterprise mobile solution from scratch, 
          handling everything from initial boilerplate to App Store/Play Store distribution.
        </p>

        <div className="feature-grid">
          <div className="feature-group">
            <h4>Engineering & Performance</h4>
            <ul>
              <li><span>·</span> Maintained 60FPS UI & JS thread using FlashList & Memoization</li>
              <li><span>·</span> React Query for server state & custom Sentry crash reporting</li>
              <li><span>·</span> Config hooks to sync backend changes without app restarts</li>
              <li><span>·</span> Zustand for lightweight, global client-side state</li>
              <li><span>·</span> Handle Multiple Bundle IDs / Set ups for UAT and Production </li>
            </ul>
          </div>

          <div className="feature-group">
            <h4>Core Features</h4>
            <ul>
              <li><span>·</span> GPS Geofencing (100+ office locations) with Mock Prevention</li>
              <li><span>·</span> Multi-level Approval Workflows for Leave & Attendance</li>
              <li><span>·</span> Pushy.me integration for real-time reliable notifications</li>
            </ul>
          </div>
        </div>

        <div className="tag-row">
          <span className="tech-tag">React Native</span>
          <span className="tech-tag">Expo</span>
          <span className="tech-tag">React Query</span>
          <span className="tech-tag">Zustand</span>
           <span className="tech-tag">Sentry</span>
        </div>
      </div>

      <div className="project-visual">
        <div className="phone-mockup">
          <div className="phone-speaker"></div>
          <div className="phone-screen">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster={hrImagePreview}
              className={`fade-in ${isVisible ? 'playing' : 'stopped'}`}
              src={isVisible ? hrDemoVideo : ""}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block' 
              }}
            />
          </div>
          <div className="phone-button"></div>
        </div>
      </div>
    </>
  )
}

export default HmfProject