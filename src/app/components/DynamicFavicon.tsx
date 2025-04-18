'use client';

import { useEffect } from 'react';

export default function DynamicFavicon() {
  useEffect(() => {
    // Function to update favicon based on color scheme
    function updateFavicon() {
      const isDarkMode = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Use the appropriate Astreus logo files
      const faviconPath = isDarkMode ? '/astreus-logo-white.svg' : '/astreus-logo.svg';
      
      // Update favicon links
      const favicon = document.getElementById('favicon') as HTMLLinkElement;
      const appleTouchIcon = document.getElementById('apple-touch-icon') as HTMLLinkElement;
      
      if (favicon) favicon.href = faviconPath;
      if (appleTouchIcon) appleTouchIcon.href = faviconPath;
    }
    
    // Set favicon on initial load
    updateFavicon();
    
    // Watch for color scheme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);
    
    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', updateFavicon);
    };
  }, []);
  
  // Component doesn't render anything visually
  return null;
} 