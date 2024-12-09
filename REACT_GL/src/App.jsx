import React, {  useState,useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MainPage, Navbar, About, Gallery, Units, Benefits, Contact, Footer, ContactPage, Navbar2 } from './components';
import { ListingPage } from './components/pages/ListingPage/ListingPage';
import SingleFlatCard from './components/pages/SingleFlatCard/SingleFlatCard';
import SingleFlatGallery from './components/pages/SingleFlatGallery/SingleFlatGallery';
import Location from './components/pages/Location/Location';
import GalleryFullPage from './components/pages/GalleryFullPage/GalleryFullPage';
import Gallery2 from './components/Gallery2/Gallery2';
import LanguageSelector from './components/LanguageSelectorPopup/LanguageSelectorPopup';
import './App.css'
import './i18n';
import { Company } from './components/Company/Company';
import { Company2 } from './components/Company2/Company2';



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {

  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  useEffect(() => {

    console.log(localStorage.getItem('language'))

    // Immediately hide the language selector if a language is already set
    if (localStorage.getItem('language')) {
      setShowLanguageSelector(false);
    } else {
      // Show the language selector if no language is set
      setShowLanguageSelector(true);
    }
  }); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <Router>
      {showLanguageSelector && <LanguageSelector onClose={() => setShowLanguageSelector(false)} />}
      <ScrollToTop /> {/* This component will take care of scrolling to the top */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <>
            <Navbar />
            <MainPage />
            <Company2/>
            <Gallery2/>
            <GalleryFullPage/>
            <About />
            <Gallery />
            <Units />
            <Benefits />
            <Company/>
            <Contact />
            <Footer />
          </>
        } />

        {/* Contact page route */}
        <Route path="/contact" element={
          <>
            <Navbar2 />
            <ContactPage />
            <Footer />
          </>
        } />


        {/* Listing page route */}
        <Route path="/listing" element={
          <>
            <Navbar2 />
            <ListingPage />
            <Footer />
          </>

        } />


        {/* Listing page route */}
        <Route path="/single-flat-card/:flatIndex" element={
          <>
            <Navbar2 />
            <SingleFlatCard />
            <Gallery />
            <div className='empty'></div>
            <Footer />
          </>
        } />
        

        {/*Gallery page route*/}
        <Route path="/gallery/:path" element={
          <>
            <Navbar2 />
            <GalleryFullPage />
            <Footer />
          </>
       } />
      </Routes>
    </Router>
  );
}

export default App;
