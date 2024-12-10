// src/components/MainPage.jsx
import React, { useEffect } from 'react';
import './MainPage.css'; // Ensure this CSS file exists
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/logo_White.svg';
import BGMain2 from '../../assets/BGMain2.webp'; // Import the background image

/**
 * MainPage component representing the home/landing page.
 */
const MainPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundImage = document.querySelector('.background-image');
      if (backgroundImage) {
        const scaleAmount = 1 + scrollPosition * 0.0003;
        const parallaxOffset = scrollPosition * 0.5;
        backgroundImage.style.transform = `translateY(${parallaxOffset}px) scale(${scaleAmount})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * Smoothly scrolls to a specific section on the page.
   * @param {string} sectionId - The ID of the section to scroll to.
   */
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
      <div
        className="background-image"
        style={{ backgroundImage: `url(${BGMain2})` }}
      ></div>
      <div className="headline">
        <img src={Logo} alt="Company Logo" />
      </div>
      <a onClick={() => scrollToSection('contact-section')} className="request-link">
        {t('navbar.request')}
      </a>
      {/* Uncomment and adjust the scroll indicator if needed */}
      {/*
      <div className="scroll-indicator">
        <p className='ScrollText'>SCROLL DOWN</p>
        <svg width="1" height="40" viewBox="0 0 1 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.57023e-08" x2="0.499997" y2="70" stroke="#f5f5f5"/>
        </svg>
      </div>
      */}
    </div>
  );
};

export default MainPage;
