import { useState } from 'react';
import '../styles/project.css';
import HmfProject from '../components/HmfProject';
import KyatFlowProject from '../components/KyatFlowProject';

function Project() {
    const [currentProject, setCurrentProject] = useState(0);

    return (
        <div className="tab-view fade-in project-main-wrapper">
            <div className="nav-button-container">
                {currentProject === 1 && (
                    <button onClick={() => setCurrentProject(0)} className="nav-button">
                        {"<"}
                    </button>
                )}
            </div>

            {currentProject === 0 ? <HmfProject /> : <KyatFlowProject />}

            <div className="nav-button-container">
                {currentProject === 0 && (
                    <button onClick={() => setCurrentProject(1)} className="nav-button">
                        {">"}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Project;