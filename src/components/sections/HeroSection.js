import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const texts = [
    'Computer Science Undergraduate',
    'Full Stack Mobile Developer',
    'Problem Solver',
    'Innovation Enthusiast'
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
      }

      setTimeout(typeText, typeSpeed);
    };

    typeText();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name-highlight">Pavan Edirisingha</span>
          </h1>
          <div className="hero-subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </div>
          <p className="hero-description">
            Passionate about creating innovative mobile and web solutions that make a difference. 
            Currently pursuing Computer Science while building real-world applications that solve complex problems.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary btn-animated">
              <span className="btn-text">View My Work</span>
              <i className="fas fa-arrow-right btn-icon"></i>
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-animated">
              <span className="btn-text">Get In Touch</span>
              <i className="fas fa-envelope btn-icon"></i>
            </Link>
          </div>
        </div>
        
        <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
          <div className="image-container">
            <div className="image-background"></div>
            <img 
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="Pavan Edirisingha" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="floating-icons">
              <div className="tech-icon flutter">
                <i className="fab fa-flutter"></i>
              </div>
              <div className="tech-icon laravel">
                <i className="fab fa-laravel"></i>
              </div>
              <div className="tech-icon react">
                <i className="fab fa-react"></i>
              </div>
              <div className="tech-icon python">
                <i className="fab fa-python"></i>
              </div>
              <div className="tech-icon js">
                <i className="fab fa-js-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;
