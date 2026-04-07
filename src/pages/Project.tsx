import '../App.css'

function Project() {
  return (
                <div className="tab-view fade-in project-grid">
              <div className="project-text">
                <h3>Hana HR Operations Suite</h3>
                <p>Enterprise mobile solution for field operations and resource management.</p>
                <div className="stat-boxes">
                  <div className="stat-box"><h4>60</h4><span>FPS TARGET</span></div>
                  <div className="stat-box"><h4>1.3s</h4><span>LOAD REDUCTION</span></div>
                </div>
              </div>
              <div className="project-visual">
                 <div className="phone-container">
                    <video autoPlay loop muted playsInline src="/demo.mp4" />
                 </div>
              </div>
            </div>
  )
}

export default Project