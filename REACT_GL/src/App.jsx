// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  MainPage,
  Navbar,
  About,
  Gallery,
  Units,
  Benefits,
  Contact,
  Footer,
  ContactPage,
  Navbar2
} from './components';
import { ListingPage } from './components/pages/ListingPage/ListingPage';
import SingleFlatCard from './components/pages/SingleFlatCard/SingleFlatCard';
import SingleFlatGallery from './components/pages/SingleFlatGallery/SingleFlatGallery';
import Location from './components/pages/Location/Location';
import GalleryFullPage from './components/pages/GalleryFullPage/GalleryFullPage';
import Gallery2 from './components/Gallery2/Gallery2';
import LanguageSelector from './components/LanguageSelectorPopup/LanguageSelectorPopup';
import './App.css';
import './i18n';
import { Company } from './components/Company/Company';
import { Company2 } from './components/Company2/Company2';
import Loader from './components/Loader/Loader'; // Correct import

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showLoader, setShowLoader] = useState(false); // Controls Loader visibility
  const [loading, setLoading] = useState(false); // Controls Loader's internal loading state

  useEffect(() => {
    // Check if the Loader has been shown before
    const loaderShown = localStorage.getItem('loaderShown');

    if (!loaderShown) {
      setShowLoader(true); // Show the Loader
      setLoading(true); // Start Loader animation

      // Hide the Loader after 3 seconds
      const timer = setTimeout(() => {
        setLoading(false); // Trigger fade-out
        localStorage.setItem('loaderShown', 'true'); // Prevent future Loader displays
      }, 3000); // Duration in milliseconds

      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }
  }, []);

  const handleFadeOutComplete = () => {
    setShowLoader(false); // Remove Loader from the DOM after fade-out
  };

  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden'; // Disable scrolling while Loader is active
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLoader]);

  useEffect(() => {
    // Handle Language Selector
    const language = localStorage.getItem('language');
    if (!language) {
      setShowLanguageSelector(true);
    }
  }, []);

  return (
    <Router>
      {/* Loader Overlay */}
      {showLoader && (
        <Loader loading={loading} onFadeOutComplete={handleFadeOutComplete} />
      )}

      {/* Language Selector */}
      {!showLoader && showLanguageSelector && (
        <LanguageSelector onClose={() => setShowLanguageSelector(false)} />
      )}

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Main Content */}
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MainPage />
              <Company2 />
              <Gallery2 />
              <GalleryFullPage />
              <About />
              <Gallery />
              <Units />
              <Benefits />
              <Company />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Contact page route */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar2 />
              <ContactPage />
              <Footer />
            </>
          }
        />

        {/* Listing page route */}
        <Route
          path="/listing"
          element={
            <>
              <Navbar2 />
              <ListingPage />
              <Footer />
            </>
          }
        />

        {/* Single Flat Card route */}
        <Route
          path="/single-flat-card/:flatIndex"
          element={
            <>
              <Navbar2 />
              <SingleFlatCard />
              <Gallery />
              <div className="empty"></div>
              <Footer />
            </>
          }
        />

        {/* Gallery full page route */}
        <Route
          path="/gallery/:path"
          element={
            <>
              <Navbar2 />
              <GalleryFullPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
