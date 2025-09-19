import React from 'react';
import { skills } from '../../data/skillsData';

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div 
              key={category}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skillList.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-item"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + skillIndex * 50}
                  >
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;