import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a 
              href="mailto:dulakshithapavan@gmail.com" 
              className="social-link" 
              data-tooltip="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="https://github.com/PavanEdirisingha2000" 
              className="social-link" 
              data-tooltip="GitHub" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/pavan-edirisingha-701329212" 
              className="social-link" 
              data-tooltip="LinkedIn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} Pavan Edirisingha. Crafted with passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
