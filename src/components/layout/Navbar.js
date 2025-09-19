import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { handleSectionNavigation } from '../../utils/navigation';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme, isUsingSystemTheme, resetToSystemTheme } = useTheme();

  const handleThemeDoubleClick = () => {
    resetToSystemTheme();
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    handleSectionNavigation('about', navigate, location.pathname);
  };

  const handleSkillsClick = (e) => {
    e.preventDefault();
    handleSectionNavigation('skills', navigate, location.pathname);
  };

  const handleExperienceClick = (e) => {
    e.preventDefault();
    handleSectionNavigation('experience', navigate, location.pathname);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/" data-aos="fade-right">
          <div className="logo-container">
            <i className="fas fa-code logo-icon"></i>
            <span className="logo-text">Pavan Edirisingha</span>
          </div>
        </Link>
        
        <div className="navbar-actions">
          <div 
            className="theme-toggle" 
            onClick={toggleTheme}
            onDoubleClick={handleThemeDoubleClick}
            data-tooltip={
              isUsingSystemTheme 
                ? `Auto (${isDarkMode ? 'Dark' : 'Light'}) - Double-click to manually control` 
                : `Manual (${isDarkMode ? 'Dark' : 'Light'}) - Double-click to use system theme`
            }
          >
            <div className={`theme-toggle-track ${isDarkMode ? 'dark' : ''}`}>
              <div className={`theme-toggle-thumb ${isDarkMode ? 'dark' : ''} ${isUsingSystemTheme ? 'auto' : ''}`}>
                <i className="fas fa-sun sun-icon"></i>
                <i className="fas fa-moon moon-icon"></i>
                {isUsingSystemTheme && <i className="fas fa-magic auto-icon"></i>}
              </div>
            </div>
          </div>
          
          <a 
            href="https://github.com/PavanEdirisingha2000" 
            className="github-nav-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            data-tooltip="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/pavan-edirisingha-701329212" 
            className="linkedin-nav-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            data-tooltip="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/" 
                data-aos="fade-down" 
                data-aos-delay="100"
              >
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#about"
                onClick={handleAboutClick}
                data-aos="fade-down" 
                data-aos-delay="200"
              >
                <span className="nav-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} 
                to="/projects" 
                data-aos="fade-down" 
                data-aos-delay="300"
              >
                <span className="nav-text">Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#skills"
                onClick={handleSkillsClick}
                data-aos="fade-down" 
                data-aos-delay="400"
              >
                <span className="nav-text">Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#experience"
                onClick={handleExperienceClick}
                data-aos="fade-down" 
                data-aos-delay="500"
              >
                <span className="nav-text">Experience</span>
              </a>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link contact-btn ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact" 
                data-aos="fade-down" 
                data-aos-delay="600"
              >
                <span className="nav-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
