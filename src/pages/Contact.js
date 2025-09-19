import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="header-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        
        <div className="container">
          <div className="header-content" data-aos="fade-up">
            <h1 className="page-title">Let's Work Together</h1>
            <p className="page-subtitle">
              Open to new opportunities and collaborations. Let's discuss how I can contribute to your team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">What you might want to know about working with me</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-question">
                <div className="faq-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h4>What type of roles am I seeking?</h4>
              </div>
              <p className="faq-answer">
                I'm looking for full-stack developer positions, mobile app development roles, 
                or opportunities where I can contribute to both frontend and backend development.
              </p>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-question">
                <div className="faq-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h4>What technologies do I specialize in?</h4>
              </div>
              <p className="faq-answer">
                I specialize in Flutter for mobile development, React for web frontends, 
                Laravel/PHP for backend APIs, and have experience with MySQL, Firebase, and MongoDB.
              </p>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-question">
                <div className="faq-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>What's my availability?</h4>
              </div>
              <p className="faq-answer">
                I'm available for immediate start and can work full-time. I'm flexible with working hours 
                and comfortable with both remote and on-site work arrangements.
              </p>
            </div>
            
            <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
              <div className="faq-question">
                <div className="faq-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Am I open to learning new technologies?</h4>
              </div>
              <p className="faq-answer">
                Absolutely! I'm passionate about continuous learning and staying up-to-date with 
                the latest technologies and development practices in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
