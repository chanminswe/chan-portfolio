import '../styles/experience.css';

function Education() {
    const educationData = [
        {
            title: "Advanced Diploma in FullStack Development",
            institution: "Myanmar Technopreneur Association (MTA)",
            period: "2019 – 2023",
            location: "Myanmar",
            details: [
                "Advanced Certificate in IT (Software Engineering)",
                "Advanced Certificate in IT (Software Engineering)",
                "Honors Diploma in IT (Software Engineering)"
            ]
        },
        {
            title: "Meta React Native Professional Certificate",
            institution: "Coursera / Meta",
            period: "Issued Mar 2025",
            details: [
                "Learned how React Native renders components to native UI and how to manage the bridge between JS and native code.",
                "Built several projects focusing on navigation, Flexbox layouts, and using native device features like the camera."
            ]
        },
        {
            title: "React Native Development Certificate",
            institution: "Coursera / Board Infinity",
            period: "Issued Mar 2025",
            details: [
                "Focused on state management and optimizing app performance for both iOS and Android.",
                "Built production-ready logic to handle complex data flows while keeping a single codebase."
            ]
        },
        

    ];

    return (
        <div className="tab-view fade-in">
            {educationData.map((edu, i) => (
                <div key={i} className="exp-block">
                    <div className="exp-visual">
                        <div className="exp-dot"></div>
                        {i !== educationData.length - 1 && <div className="exp-line"></div>}
                    </div>

                    <div className="exp-content">
                        <div className="exp-header">
                            <div className="title-wrapper">
                                <h3>{edu.title}</h3>
                                <span className="company-text">{edu.institution}</span>
                            </div>
                            <span className="date-text">{edu.period}</span>
                        </div>

                        {edu.details && (
                            <div className="achievement-list">
                                {edu.details.map((detail, j) => (
                                    <p key={j} className="achievement-item">
                                        <span className="bullet">·</span> {detail}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Education;