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
import Loader from './components/Loader/Loader'; // Import the Loader component

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [loading, setLoading] = useState(true); // Loader state
  const [showLoader, setShowLoader] = useState(true); // Control Loader visibility

  useEffect(() => {
    console.log(localStorage.getItem('language'));

    // Immediately hide the language selector if a language is already set
    if (localStorage.getItem('language')) {
      setShowLanguageSelector(false);
    } else {
      // Show the language selector if no language is set
      setShowLanguageSelector(true);
    }

    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader displays for 3 seconds

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []); // Runs only once on mount

  const handleFadeOutComplete = () => {
    setShowLoader(false); // Unmount Loader after fade-out
  };

  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden'; // Disable scrolling while loader is active
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLoader]);

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
      {!showLoader && <ScrollToTop />}

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
