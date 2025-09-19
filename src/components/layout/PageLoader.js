import React from 'react';

const PageLoader = () => {
  return (
    <div className="page-loader" id="pageLoader">
      <div className="loader-content">
        <div className="loader-logo">
          <i className="fas fa-code"></i>
        </div>
        <div className="loading-text">
          <span>L</span><span>o</span><span>a</span><span>d</span>
          <span>i</span><span>n</span><span>g</span>
        </div>
        <div className="loader-bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
