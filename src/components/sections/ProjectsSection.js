import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';

const ProjectsSection = () => {
  // Get featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and development projects
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <img 
                  src={project.image ? `${process.env.PUBLIC_URL}/images/projects/${project.image}` : `${process.env.PUBLIC_URL}/images/project-placeholder.jpg`} 
                  alt={project.title}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-light"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-light"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech && project.tech.split(', ').slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;