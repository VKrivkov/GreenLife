import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MainPage, Navbar, About, Gallery, Units, Benefits, Contact, Footer, ContactPage, Navbar2 } from './components';
import { ListingPage } from './components/pages/ListingPage/ListingPage';
import SingleFlatCard from './components/pages/SingleFlatCard/SingleFlatCard';
import SingleFlatGallery from './components/pages/SingleFlatGallery/SingleFlatGallery';
import Location from './components/pages/Location/Location';
import GalleryFullPage from './components/pages/GalleryFullPage/GalleryFullPage';
import './i18n';



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {


  useEffect(() => {
    const blockHorizontalScroll = (e) => {
      window.scrollTo(0, window.scrollY);
    };

    // Add event listener when component mounts
    window.addEventListener('wheel', blockHorizontalScroll, { passive: false });

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('wheel', blockHorizontalScroll, { passive: false });
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* This component will take care of scrolling to the top */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <>
            <Navbar />
            <MainPage />
            <About />
            <Gallery />
            <Units />
            <Benefits />
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
            <SingleFlatGallery/>
            <Location/>
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
