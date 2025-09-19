import React from 'react';

const ProjectImagePlaceholder = ({ title, category }) => {
  const getIcon = (category) => {
    switch (category) {
      case 'Mobile App':
        return 'fas fa-mobile-alt';
      case 'Web App':
        return 'fas fa-globe';
      case 'Desktop App':
        return 'fas fa-desktop';
      default:
        return 'fas fa-code';
    }
  };

  return (
    <div className="project-image-placeholder">
      <div className="placeholder-content">
        <i className={getIcon(category)}></i>
        <span className="placeholder-title">{title}</span>
        <span className="placeholder-category">{category}</span>
      </div>
      <div className="placeholder-overlay">
        <div className="code-symbols">
          <span>&lt;/&gt;</span>
          <span>{ }</span>
          <span>[ ]</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectImagePlaceholder;