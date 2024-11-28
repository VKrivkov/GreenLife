import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GalleryComponent from '../../Gallery/GalleryComponent';
import Location from '../Location/Location.jsx';
import { locArray } from './galleryfull.js';
import './GalleryFullPage.css';

const GalleryFullPage = () => {
  const { path } = useParams();
  const { t } = useTranslation();

  return (
    <div id = 'about-section'>
      <div className='location-gallery'>
        <div className='location-gallery-header'> 
          <h1>{t('galleryFullPage.location.title')}</h1>
          <p>{t('galleryFullPage.location.description')}</p>
        </div>  
        <GalleryComponent images={locArray}/>
      </div>
    </div>
  );
};

export default GalleryFullPage;
