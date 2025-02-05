import React, { useState } from 'react';
import './GalleryComponent.css';
import currPage from '../../assets/CurrPage.svg';
import otherPage from '../../assets/OtherPage.svg';
import arrowLeft from '../../assets/ArrowLeft.png';
import arrowRight from '../../assets/ArrowRight.png';

const GalleryComponent = ({ images }) => {
  // State for current slide and expanded mode
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state when clicking on the active slide
  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  // When navigating slides, we no longer collapse the expanded state.
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  // Determine the class for each slide based on its position relative to the active slide.
  const getSlideClass = (index) => {
    if (index === currentSlide) return 'slide active';
    if (index === currentSlide - 1 || (currentSlide === 0 && index === images.length - 1))
      return 'slide prev';
    if (index === currentSlide + 1 || (currentSlide === images.length - 1 && index === 0))
      return 'slide next';
    return 'slide';
  };

  return (
    <div>
      {/* Toggle the "expanded" class on the container based on the state */}
      <div className={`gallery-slider ${isExpanded ? 'expanded' : ''}`}>
        <button onClick={prevSlide} className="arrowLeft">
          <img src={arrowLeft} alt="Previous Slide" />
        </button>

        {images.map((src, index) => (
          <div
            key={index}
            className={getSlideClass(index)}
            onClick={index === currentSlide ? toggleExpand : undefined}
            style={index === currentSlide ? { cursor: 'pointer' } : {}}
          >
            <img src={src} alt={`Slide ${index}`} className="gallery-image" />
            {/* Only show the overlay on the active slide */}
            {index === currentSlide && (
              <div className="overlay">
                {isExpanded ? 'click to return' : 'click to expand'}
              </div>
            )}
          </div>
        ))}

        <button onClick={nextSlide} className="arrowRight">
          <img src={arrowRight} alt="Next Slide" />
        </button>
      </div>

      <div className="gallery-pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentSlide ? 'pagination-dotActive' : 'pagination-dot'}
          >
            <img
              src={index === currentSlide ? currPage : otherPage}
              alt="Pagination Dot"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
