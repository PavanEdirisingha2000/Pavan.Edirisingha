import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="container">
        <div className="cta-content" data-aos="fade-up">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-text">I'm always interested in discussing new opportunities and innovative projects.</p>
          <Link to="/contact" className="btn btn-primary btn-animated">
            <span className="btn-text">Get In Touch</span>
            <i className="fas fa-arrow-right btn-icon"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;