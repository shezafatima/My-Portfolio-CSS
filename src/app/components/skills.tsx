
"use client";
import React, { useEffect, useRef, useState } from 'react';
import "../../styles/skills.css"; 

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Graphic Designing', level: 80 },
  { name: 'Next.js', level: 70 },
  { name: 'SEO', level: 60 },
  { name: 'Python', level: 50 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="Skills">
      <section ref={sectionRef} className="skills-section">
        <div className="skills-container">
          <h2 className="skills-heading">My Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="skill-label">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
