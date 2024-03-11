import React from 'react';
import './Gallery.css';
import GalleryComponent from './GalleryComponent';
import { images} from './images.js';



const Gallery = () => {
  

  return (
    <div id='gallery-section' className='gallery-container'>
      <div className='gallery-header'>
        <h1 className='headline-gallery'>Gallery</h1>
        <div className='text-block'>
          <h6>Welcome to GreenLife</h6>
          <p>Explore our carefully selected gallery to get a glimpse of the exceptional living experience at GreenLife. Each image showcases the essence of our upscale apartments, contemporary comforts, and sustainable living.</p>
        </div>
      </div>

      <GalleryComponent images = {images}/>

    </div>
  );
};

export default Gallery;
