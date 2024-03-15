import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GalleryComponent from '../../Gallery/GalleryComponent';
import Location from '../Location/Location.jsx';
import { solarArray, gymArray, poolArray, locArray } from './galleryfull.js';
import './GalleryFullPage.css';

const GalleryFullPage = () => {
  const { path } = useParams();
  const { t } = useTranslation();

  switch (path) {
    case 'location':
      return (
        <>
          <div className='location-gallery'>
            <div className='location-gallery-header'> 
              <h1>{t('galleryFullPage.location.title')}</h1>
              <p>{t('galleryFullPage.location.description')}</p>
            </div>  
            <GalleryComponent images={locArray}/>
          </div>
          <div className='map-container'>
            <Location/>
          </div>
        </>
      );

    case 'gym':
      return (
        <div className='gym-gallery'>
          <div className='gym-gallery-header'> 
            <h1>{t('galleryFullPage.gym.title')}</h1>
            <p>{t('galleryFullPage.gym.description')}</p>
          </div>  
          <GalleryComponent images={gymArray}/>
        </div>
      );

    case 'solar-panels':
      return (
        <div className='solar-panels-gallery'>
          <div className='solar-panels-gallery-header'> 
            <h1>{t('galleryFullPage.solarPanels.title')}</h1>
            <p>{t('galleryFullPage.solarPanels.description')}</p>
          </div>
          <GalleryComponent images={solarArray}/>
        </div>
      );

    case 'pool':
      return (
        <div className='pool-gallery'>
          <div className='pool-gallery-header'> 
            <h1>{t('galleryFullPage.pool.title')}</h1>
            <p>{t('galleryFullPage.pool.description')}</p>
          </div>
          <GalleryComponent images={poolArray}/>
        </div>
      );

    default:
      return <div className='NoDataFound'>{t('galleryFullPage.noDataFound')}</div>;
  }
};

export default GalleryFullPage;
