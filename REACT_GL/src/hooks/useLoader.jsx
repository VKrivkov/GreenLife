// src/hooks/useLoader.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to manage the loader's visibility based on the loading state of a background image.
 * @param {string} imageSrc - The source URL of the background image to preload.
 * @param {number} reloadAfterMs - Duration in milliseconds after which the loader should reappear.
 * @returns {boolean} - Loading state (true if loading, false otherwise).
 */
const useLoader = (imageSrc, reloadAfterMs = 24 * 60 * 60 * 1000) => { // Default: 1 day
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loaderData = localStorage.getItem('loaderShown');
    let showLoader = false;

    if (loaderData) {
      try {
        const parsedData = JSON.parse(loaderData);
        const { timestamp } = parsedData;
        const now = Date.now();
        if (now - timestamp > reloadAfterMs) {
          showLoader = true; // Show loader again after the specified duration
        }
      } catch (error) {
        console.error('Error parsing loaderShown from localStorage:', error);
        showLoader = true; // Show loader if data is corrupted
      }
    } else {
      showLoader = true; // Show loader if not shown before
    }

    if (showLoader) {
      setLoading(true);

      // Preload the background image
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        setLoading(false); // Trigger fade-out
        localStorage.setItem('loaderShown', JSON.stringify({ timestamp: Date.now() }));
      };
      img.onerror = () => {
        console.error('Failed to load background image.');
        setLoading(false); // Hide loader even if image fails to load
      };
    }
  }, [imageSrc, reloadAfterMs]);

  return loading;
};

export default useLoader;
