import React, { useState } from 'react';
import ProjectImagePlaceholder from '../common/ProjectImagePlaceholder';

const ProjectCard = ({ project, onViewDetails, index }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleViewDetails = (e) => {
    e.stopPropagation();
    onViewDetails(project);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className="project-card" 
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="project-image">
        {!imageError && project.image ? (
          <img 
            src={`${process.env.PUBLIC_URL}/images/projects/${project.image}`} 
            alt={project.title}
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <ProjectImagePlaceholder 
            title={project.title}
            category={project.category}
          />
        )}
        <div className="project-overlay">
          <div className="project-category">{project.category}</div>
          <div className="project-actions">
            <button 
              className="btn btn-outline-light btn-sm"
              onClick={handleViewDetails}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-meta">
          <div className="project-tech">
            {project.tech && project.tech.split(', ').slice(0, 3).map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="project-links">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link demo-link"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;