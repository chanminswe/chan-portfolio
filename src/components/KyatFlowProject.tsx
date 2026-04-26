import { useState, useEffect, useRef } from 'react';
import '../styles/project.css';
import ksFlowVid from '/ks-flow.mov';
import ksFlowPreview from '/ks-flowPreview.png';

function KyatFlowProject() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="project-layout" ref={containerRef}>
            <div className="project-text">
                <div className="project-badge">Under Development</div>
                <h3>KyatFlow: Personal Finance</h3>
                <p className="project-intro">
                    I'm building a privacy-first finance tracker that works entirely offline.
                    By combining a custom Node.js API with Drizzle and SQLite, it handles
                    transaction logging with zero lag, even on spotty connections.
                </p>

                <div className="feature-grid">
                    <div className="feature-group">
                        <h4>The Technical Side</h4>
                        <ul>
                            <li><span>·</span> Pure React Native (No Expo) for absolute control over the native layer</li>
                            <li><span>·</span> Type-safe database management using Drizzle ORM and SQLite</li>
                            <li><span>·</span> Secure auth flow built with JWT and Bcrypt for data protection</li>
                            <li><span>·</span> Lightweight Express.js backend written in TypeScript</li>
                        </ul>
                    </div>

                    <div className="feature-group">
                        <h4>What's Coming Next</h4>
                        <ul>
                            <li><span>·</span> Training TensorFlow models to categorize transactions automatically</li>
                            <li><span>·</span> Intelligent budget alerts that actually help you stay under your limit</li>
                            <li><span>·</span> Predicting future spending patterns based on your past habits</li>
                        </ul>
                    </div>
                </div>

                <div className="tag-row">
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">SQLite</span>
                    <span className="tech-tag">Drizzle ORM</span>
                    <span className="tech-tag">TypeScript</span>
                </div>
            </div>

            <div className="project-visual">
                <div className="phone-mockup">
                    <div className="phone-speaker"></div>
                    <div className="phone-screen">
                        {isVisible && (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster={ksFlowPreview}
                                className="fade-in playing"
                                src={ksFlowVid}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        )}
                    </div>
                    <div className="phone-button"></div>
                </div>
            </div>
        </div>
    );
}

export default KyatFlowProject;