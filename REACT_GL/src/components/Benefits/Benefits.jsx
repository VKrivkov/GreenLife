import React from 'react';
import { useTranslation } from 'react-i18next';
import './Benefits.css';
import Quality from '../../assets/Quality.jpg';
import Community from '../../assets/Community.jpg';
import Solars from '../../assets/Solars.jpg';

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <>

    <div id='benefits-section' className='benefits-container'>
      {/* <div className='head-container'>
        <h2 className='HeadlineBenefits'>{t('benefits.headline')}</h2>
        <p>{t('benefits.subHeadline')}</p>
      </div> */}
           <div className='gallery-header'>
        <h1 className='headline-gallery'>{t('benefits.headline')}</h1>
        <div className='text-block'>
          <h6>{t('benefits.subHeadline')}</h6>
          <p>{t('gallery.description')}</p>
        </div>
      </div>
      <div className='content-container'>
        <div className='quality-container'>
          <img src={Quality} alt={t('benefits.constructionQuality')} />
          <h6>{t('benefits.constructionQuality')}</h6>
          <p>{t('benefits.qualityDescription')}</p>
        </div>
        <div className='solars-container'>
          <img src={Solars} alt={t('benefits.leveragingSolarPanels')} />
          <h6>{t('benefits.leveragingSolarPanels')}</h6>
          <p>{t('benefits.solarDescription')}</p>
        </div>
        <div className='community-container'>
          <img src={Community} alt={t('benefits.communitySpaces')} />
          <h6>{t('benefits.communitySpaces')}</h6>
          <p>{t('benefits.communityDescription')}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Benefits;
