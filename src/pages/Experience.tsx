import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Cross Platform Mobile Developer",
      company: "Hana Microfinance Myanmar",
      period: "Feb 2025 — Present",
      description: "Sole developer building a production-ready internal HR operations application using React Native (Expo).",
      achievements: [
        "Implemented real-time employee attendance system using GPS location tracking.",
        "Optimized performance using React Query caching, reducing loading time by ~1.3s.",
        "Integrated native device capabilities including camera, image gallery, and push notifications.",
        "Handled Android production builds and iOS distribution via TestFlight."
      ],
      tech: ["React Native", "Expo", "React Query", "Sentry", "PHP"]
    },
    {
      title: "Head of Exam Centers",
      company: "Linux Lab",
      period: "March 2023 — Jan 2025",
      description: "Managed technical operations and coordinated with international teams for exam execution.",
      achievements: [
        "Ensured smooth execution of exams for all test takers.",
        "Resolved technical issues arising during exams efficiently.",
        "Managed staff and schedules to prevent disruptions during holidays and exam periods."
      ],
      tech: ["Operations", "Team Management", "Technical Support"]
    },
    {
      title: "Part time Teacher",
      company: "Myanmar Technopreneur Association",
      period: "Oct 2022 — March 2025",
      description: "Mentored students in React, HTML, and CSS through hands-on project builds.",
      achievements: [
        "Reviewed code and guided students on state management and component architecture."
      ],
      tech: ["React", "HTML/CSS", "Mentorship"]
    }
  ];

  return (
    <div className="tab-view fade-in">
      {experiences.map((exp, i) => (
        <div key={i} className="exp-block">
          <div className="exp-visual">
            <div className="exp-dot"></div>
            {/* Don't render the line for the very last item */}
            {i !== experiences.length - 1 && <div className="exp-line"></div>}
          </div>
          <div className="exp-content">
            <div className="exp-header">
              <h3>{exp.title}</h3>
              <span className="date-text">{exp.period}</span>
            </div>
            <p className="company-text">{exp.company}</p>
            <p className="description-text">{exp.description}</p>
            
            {exp.achievements && (
              <div className="achievement-list">
                {exp.achievements.map((a, j) => (
                  <p key={j} className="achievement-item">· {a}</p>
                ))}
              </div>
            )}
            
            <div className="tag-row">
              {exp.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;