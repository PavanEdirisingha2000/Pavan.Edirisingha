// Utility function to get correct image paths with React Router basename
export const getImagePath = (imagePath) => {
  return `${process.env.PUBLIC_URL}${imagePath}`;
};

export const getProjectImagePath = (imageName) => {
  if (!imageName) return getImagePath('/images/project-placeholder.jpg');
  return getImagePath(`/images/projects/${imageName}`);
};

export const getProfileImagePath = () => {
  return getImagePath('/images/profile.jpg');
};