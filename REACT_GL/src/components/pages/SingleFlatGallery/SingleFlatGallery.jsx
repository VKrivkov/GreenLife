import React from 'react';
import './SingleFlatGallery.css';
import GalleryComponent from '../../Gallery/GalleryComponent';
import { flatarray } from '../flatarray';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const SingleFlatGallery = () => {
  const { flatIndex } = useParams();
  const flat = flatarray[parseInt(flatIndex, 10)];
  const { t } = useTranslation();

  if (!flat) {
    return <div>{t('singleFlatGallery.noFlatData', { defaultValue: 'No flat data available. Please go back to the listing page.' })}</div>;
  }

  return (
    <div className='single-flat-gallery-container'>
        <div className='single-flat-gallery-header'>
            <h1>{t('singleFlatGallery.viewsAndLocation')}</h1>
            <p>{t('singleFlatGallery.description')}</p>
        </div>
        <GalleryComponent images = {flat[7]}/>
    </div>
  )
}

export default SingleFlatGallery;
