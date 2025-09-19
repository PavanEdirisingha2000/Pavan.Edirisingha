import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info" data-aos="fade-right">
      <h3 className="contact-info-title">Let's Connect</h3>
      <p className="contact-info-text">
        I'm actively seeking new opportunities and exciting challenges. 
        Let's discuss how I can contribute to your team and projects.
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-content">
            <h4>Email</h4>
            <p>pavanedirisingha@example.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-content">
            <h4>Phone</h4>
            <p>+94 (70) 123-4567</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="contact-content">
            <h4>Location</h4>
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="contact-content">
            <h4>Response Time</h4>
            <p>Within 24 hours</p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <h4>Connect With Me</h4>
        <div className="social-icons">
          <a href="https://github.com/PavanEdirisingha2000" target="_blank" rel="noopener noreferrer" className="social-link github">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/pavan-edirisingha-701329212" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;