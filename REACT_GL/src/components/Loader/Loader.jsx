// src/components/Loader.jsx
import React, { useEffect, useRef } from 'react';
import './Loader.css';
import Logo from '../../assets/logo_White.svg'; // Adjust the path as necessary

/**
 * Loader component to display a loading overlay.
 * @param {boolean} loading - Controls the loader's internal loading state.
 * @param {function} onFadeOutComplete - Callback when fade-out transition is complete.
 */
const Loader = ({ loading, onFadeOutComplete }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      // Add the fade-out class to trigger CSS transition
      if (overlayRef.current) {
        overlayRef.current.classList.add('fade-out');
      }
    }
  }, [loading]);

  useEffect(() => {
    const handleTransitionEnd = (e) => {
      if (e.propertyName === 'opacity' && !loading) {
        // Notify the parent component that fade-out is complete
        if (onFadeOutComplete) {
          onFadeOutComplete();
        }
      }
    };

    const overlayCurrent = overlayRef.current;
    if (overlayCurrent) {
      overlayCurrent.addEventListener('transitionend', handleTransitionEnd);
    }

    // Cleanup the event listener on unmount
    return () => {
      if (overlayCurrent) {
        overlayCurrent.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [loading, onFadeOutComplete]);

  return (
    <div
      className="loader-overlay"
      ref={overlayRef}
      aria-busy={loading}
      aria-label="Loading"
    >
      <img src={Logo} alt="Company Logo" className="loader-logo" />
    </div>
  );
};

export default Loader;
