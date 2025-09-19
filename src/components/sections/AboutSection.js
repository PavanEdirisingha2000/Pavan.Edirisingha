import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up">
            <div className="about-content text-center">
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                I'm a passionate Computer Science undergraduate and Full Stack Mobile Developer 
                with a strong focus on Flutter and React development. I love creating innovative 
                solutions that make a difference in people's lives.
              </p>
              <p className="about-text">
                With experience in developing mobile applications and web solutions, I combine 
                technical expertise with creative problem-solving to deliver high-quality, 
                user-centered applications.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>4+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>6+</h3>
                  <p>Months Experience</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;