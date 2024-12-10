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
import BGMain2 from './assets/BGMain2.webp'; // Import the background image
import useLoader from './hooks/useLoader'; // Import the custom hook

/**
 * Component to handle scrolling to the top on route changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Main content component wrapped by Router to access routing information.
 */
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Use the custom loader hook
  const loading = useLoader(BGMain2, 24 * 60 * 60 * 1000); // Reload after 1 day
  const [showLoader, setShowLoader] = useState(loading);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  useEffect(() => {
    setShowLoader(loading);
  }, [loading]);

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
    <>
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
    </>
  );
};

/**
 * Root App component wrapped with Router.
 */
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
