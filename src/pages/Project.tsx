import { useState, useEffect, useRef } from 'react';
import '../styles/project.css';

function Project() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="tab-view fade-in project-layout" ref={videoRef}>
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
            </ul>
          </div>

          <div className="feature-group">
            <h4>Core Features</h4>
            <ul>
              <li><span>·</span> GPS Geofencing (100+ office locations) with Mock Prevention</li>
              <li><span>·</span> Multi-level Approval Workflows for Leave & Attendance</li>
              <li><span>·</span> Pushy.me integration for real-time reliable notifications</li>
              <li><span>·</span> Automated HR reporting via Power Automate & Legacy PHP</li>
            </ul>
          </div>
        </div>

        <div className="tag-row">
          <span className="tech-tag">React Native</span>
          <span className="tech-tag">Expo</span>
        </div>
      </div>

      <div className="project-visual">
        <div className="phone-mockup">
          <div className="phone-speaker"></div>
          <div className="phone-screen">
            {isVisible ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="fade-in"
                src="/Simulator Screen Recording - iPhone 17 Pro - 2026-04-06 at 20.11.55 (1).mov" 
              />
            ) : (
              <div className="video-placeholder">Loading...</div>
            )}
          </div>
          <div className="phone-button"></div>
        </div>
      </div>
    </div>
  );
}

export default Project;