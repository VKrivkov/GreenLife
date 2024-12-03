import React from 'react';
import { useTranslation } from 'react-i18next';
import GalleryComponent from '../Gallery/GalleryComponent.jsx';
import { images } from './images.js';

const Gallery2 = () => {
  const { t } = useTranslation();

  return (
    <div id='exterior-section' className='gallery-container'>
      <div className='gallery-header'>
        <h1 className='headline-gallery'>{t('gallery2.headline')}</h1>
        <div className='text-block'>
          <p>{t('gallery2.description')}</p>
        </div>
      </div>
      <GalleryComponent images={images}/>
    </div>
  );
};

export default Gallery2;
