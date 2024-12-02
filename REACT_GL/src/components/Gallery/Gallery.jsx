import React from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';
import GalleryComponent from './GalleryComponent';
import { images } from './images.js';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <div id='gallery-section' className='gallery-container'>
      <div className='gallery-header'>
        <h1 className='headline-gallery'>{t('gallery.headline')}</h1>
        <div className='text-block'>
          <p>{t('gallery.description')}</p>
        </div>
      </div>

      <GalleryComponent images={images}/>
    </div>
  );
};

export default Gallery;
