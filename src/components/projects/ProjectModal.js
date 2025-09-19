import React, { useState } from 'react';
import ProjectImagePlaceholder from '../common/ProjectImagePlaceholder';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [imageError, setImageError] = useState(false);
  
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="project-modal-overlay" onClick={handleBackdropClick}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-header">
          {!imageError && project.image ? (
            <img 
              src={`${process.env.PUBLIC_URL}/images/projects/${project.image}`} 
              alt={project.title}
              className="modal-image"
              onError={handleImageError}
            />
          ) : (
            <ProjectImagePlaceholder 
              title={project.title}
              category={project.category}
            />
          )}
        </div>
        
        <div className="modal-content">
          <div className="modal-title-section">
            <h2 className="modal-title">{project.title}</h2>
            <span className="modal-category">{project.category}</span>
          </div>
          
          <p className="modal-description">{project.description}</p>
          
          {project.longDescription && (
            <div className="modal-long-description">
              <h3>About This Project</h3>
              <p>{project.longDescription}</p>
            </div>
          )}
          
          {project.features && project.features.length > 0 && (
            <div className="modal-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="modal-tech">
            <h3>Technologies Used</h3>
            <div className="tech-list">
              {project.tech && project.tech.split(', ').map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="modal-actions">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                <i className="fab fa-github"></i>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;