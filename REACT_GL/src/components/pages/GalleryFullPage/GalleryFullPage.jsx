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
      <div className='gallery'>
        <div className='gallery-header'> 
          <h1 className='headline-gallery'>{t('galleryFullPage.location.title')}</h1>
          <div className='text-block'>
            <p>{t('galleryFullPage.location.description')}</p>
          </div>
        </div>  
        <GalleryComponent images={locArray}/>
      </div>
    </div>
  );
};

export default GalleryFullPage;
