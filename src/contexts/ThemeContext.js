import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Function to detect system theme preference
const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false; // Default to light mode if can't detect
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const hasManualPreference = localStorage.getItem('hasManualThemePreference');
    
    // If user has manually set a theme before, use that
    if (hasManualPreference === 'true' && savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Otherwise, detect and use system theme
    const systemPrefersDark = getSystemTheme();
    return systemPrefersDark;
  });

  const [hasManualPreference, setHasManualPreference] = useState(() => {
    return localStorage.getItem('hasManualThemePreference') === 'true';
  });

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only auto-update if user hasn't manually set a preference
      if (!hasManualPreference) {
        setIsDarkMode(e.matches);
        console.log('🎨 System theme changed:', e.matches ? 'dark' : 'light');
      }
    };

    // Add listener for system theme changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Initial log
    console.log('🎨 Theme initialized:', {
      isDarkMode,
      hasManualPreference,
      systemPrefersDark: getSystemTheme()
    });

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [hasManualPreference, isDarkMode]);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    // Mark that user has manually set a preference
    setHasManualPreference(true);
    localStorage.setItem('hasManualThemePreference', 'true');
    console.log('🎨 Theme manually toggled to:', !isDarkMode ? 'dark' : 'light');
  };

  // Function to reset to system theme
  const resetToSystemTheme = () => {
    const systemPrefersDark = getSystemTheme();
    setIsDarkMode(systemPrefersDark);
    setHasManualPreference(false);
    localStorage.removeItem('hasManualThemePreference');
    console.log('🎨 Reset to system theme:', systemPrefersDark ? 'dark' : 'light');
  };

  const value = {
    isDarkMode,
    toggleTheme,
    resetToSystemTheme,
    hasManualPreference,
    isUsingSystemTheme: !hasManualPreference
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};