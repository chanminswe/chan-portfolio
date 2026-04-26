import { useState, useEffect, useRef } from 'react';
import '../styles/project.css';
import HmfProject from '../components/HmfProject';

function Project() {
    const [isVisible, setIsVisible] = useState(false);
    const [projects , setProjects] = useState([0 , 1]);
    const [currentProject , setCurrentProject] = useState(0);
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
            {currentProject === 1 && <button className="nav-button left">
                {"<"}
            </button>}
            
            {currentProject === 0 &&  <HmfProject isVisible={isVisible} /> }
            
            {currentProject === 1  }

            {currentProject === 0 && <button className="nav-button right">
                {">"}
            </button>}
        </div>
    );
}

export default Project;