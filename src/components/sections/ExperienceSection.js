import React from 'react';
import { experiences } from '../../data/experiencesData';

const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and achievements
          </p>
        </div>

        <div className="experiences-timeline">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className="experience-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="experience-info">
                  <div className="experience-main-info">
                    <h3 className="experience-title">{experience.title}</h3>
                    <div className="experience-company">{experience.company}</div>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-duration">
                      <i className="fas fa-calendar-alt"></i>
                      {experience.period}
                    </span>
                    <span className="experience-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {experience.location}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="experience-description">
                {experience.description}
              </p>

              <div className="achievements-section">
                <h4 className="achievements-title">
                  <i className="fas fa-trophy"></i>
                  Key Achievements
                </h4>
                <ul className="achievements-list">
                  {experience.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="skills-section">
                <h4 className="skills-title">
                  <i className="fas fa-code"></i>
                  Technologies Used
                </h4>
                <div className="experience-skills">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;