import React from 'react';
import './MainPage.css'; // Make sure to create a CSS file for styling.

const MainPage = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
  
    // Calculate the position of the section
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
  
    // Define the smooth scroll function
    const smoothScroll = (targetPosition) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration of the scroll animation in milliseconds
      let startTime = null;
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const nextScrollPosition = ease(timeElapsed, startPosition, distance, duration);
  
        window.scrollTo(0, nextScrollPosition);
  
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      requestAnimationFrame(animation);
    };
  
    // Execute the smooth scroll function
    smoothScroll(sectionTop);
  };
  

  return (
    <div className="main-page">
      <div className="headline"> {/* This is the main visual area */}
        <p className="regular-text">LIVE THE</p>
        <span className="green-text">GREEN</span>
        <span className="regular-text">LIFE</span>
      </div>
      <a onClick={() => scrollToSection('contact-section')} className="request-link">REQUEST A CALL</a>
        {/* The image would be set as a background image in the CSS for the hero-section */}
      <div className="scroll-indicator">
        <p className='ScrollText'>SCROLL DOWN</p>
        <svg width="1" height="40" viewBox="0 0 1 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.57023e-08" x2="0.499997" y2="70" stroke="#090909"/>
        </svg>
      </div>
    </div>
  );
};

export default MainPage;


