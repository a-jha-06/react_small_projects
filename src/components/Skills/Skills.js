import React from 'react';
import './Skills.css'; // Optional for extra styling

function Skills() {
    const skills = [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Next.js', icon: '⚛️' },
<<<<<<< HEAD
=======
        { name: 'Shopify', icon: '🛍️' },
>>>>>>> c8acfea (first commit)
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '💻' },
        { name: 'Git', icon: '🔧' },
        { name: 'Node.js', icon: '🖥️' },
        { name: 'Webpack', icon: '📦' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Firebase', icon: '🖥️' }

    ];

    return (
        <div className='container'>
            <section className="skills-section">
                <h2 className='heading'>Skills</h2>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        
    );
}

export default Skills;
