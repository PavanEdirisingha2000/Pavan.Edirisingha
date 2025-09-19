export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const handleSectionNavigation = (sectionId, navigate, currentPath) => {
  // If we're already on the home page, just scroll
  if (currentPath === '/') {
    scrollToSection(sectionId);
  } else {
    // Navigate to home page first, then scroll after a short delay
    navigate('/');
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }
};