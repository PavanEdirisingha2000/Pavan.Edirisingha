import React, { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import { projects } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getProjectCount = (category) => {
    if (category === 'all') return projects.length;
    return projects.filter(project => project.category === category).length;
  };

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header projects-header">
        <div className="header-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="code-particles">
            <div className="code-particle">&lt;/&gt;</div>
            <div className="code-particle">{ }</div>
            <div className="code-particle">[ ]</div>
            <div className="code-particle">( )</div>
          </div>
        </div>
        
        <div className="container">
          <div className="header-content" data-aos="fade-up">
            <h1 className="page-title">My Projects</h1>
            <p className="page-subtitle">
              A showcase of my work in mobile app development, web applications, and system design
            </p>
            
            <div className="project-stats" data-aos="fade-up" data-aos-delay="200">
              <div className="stat">
                <span className="stat-number">{projects.length}</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {projects.filter(p => p.category === 'Mobile App').length}
                </span>
                <span className="stat-label">Mobile Apps</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {projects.filter(p => p.category === 'Web App').length}
                </span>
                <span className="stat-label">Web Apps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-wrapper" data-aos="fade-up">
            <h3 className="filter-title">Filter by Category</h3>
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                <i className="fas fa-th-large"></i>
                <span>All Projects</span>
                <span className="filter-count">{getProjectCount('all')}</span>
              </button>
              <button 
                className={`filter-btn ${filter === 'Mobile App' ? 'active' : ''}`}
                onClick={() => setFilter('Mobile App')}
              >
                <i className="fas fa-mobile-alt"></i>
                <span>Mobile Apps</span>
                <span className="filter-count">{getProjectCount('Mobile App')}</span>
              </button>
              <button 
                className={`filter-btn ${filter === 'Web App' ? 'active' : ''}`}
                onClick={() => setFilter('Web App')}
              >
                <i className="fas fa-globe"></i>
                <span>Web Apps</span>
                <span className="filter-count">{getProjectCount('Web App')}</span>
              </button>
              <button 
                className={`filter-btn ${filter === 'Desktop App' ? 'active' : ''}`}
                onClick={() => setFilter('Desktop App')}
              >
                <i className="fas fa-desktop"></i>
                <span>Desktop Apps</span>
                <span className="filter-count">{getProjectCount('Desktop App')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-showcase">
        <div className="container">
          <div className="projects-grid" id="projectsGrid">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="load-more-section" data-aos="fade-up">
        <p className="load-more-text">Want to see more of my work?</p>
        <a href="/contact" className="load-more-btn">
          <span className="btn-text">Get In Touch</span>
          <i className="fas fa-arrow-right btn-icon"></i>
        </a>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
