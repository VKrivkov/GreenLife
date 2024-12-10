// src/hooks/useLoader.js
import { useState, useEffect } from 'react';

const useLoader = (duration = 3000) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loaderShown = localStorage.getItem('loaderShown');

    if (!loaderShown) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('loaderShown', 'true');
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  return loading;
};

export default useLoader;
