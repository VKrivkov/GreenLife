import React from 'react';
import { useTranslation } from 'react-i18next';
import './Company2.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className='location-gallery'>
      <div className='location-gallery-header'>
        <h2 className='sub-headline'>{t('privacy.headline')}</h2>
        <p className='first'>{t('privacy.intro')}</p>

        <h2 className='sub-headline'>{t('privacy.subtitle1')}</h2>
        <p className='last'>{t('privacy.p1')}</p>
        <p className='last'>{t('privacy.p2')}</p>

        <h2 className='sub-headline'>{t('privacy.subtitle2')}</h2>
        <p className='last'>{t('privacy.p3')}</p>
        <p className='last'>{t('privacy.p4')}</p>

        <h2 className='sub-headline'>{t('privacy.subtitle3')}</h2>
        <p className='last'>{t('privacy.p5')}</p>
        <p className='last'>{t('privacy.p6')}</p>

        <h2 className='sub-headline'>{t('privacy.subtitle4')}</h2>
        <p className='last'>{t('privacy.p7')}</p>

        <h2 className='sub-headline'>{t('privacy.subtitle5')}</h2>
        <p className='last'>{t('privacy.p8')}</p>
        <p className='last'>{t('privacy.p9')}</p>

        <h2 className='sub-headline'>{t('privacy.subtitle6')}</h2>
        <p className='last'>{t('privacy.p10')}</p>
        <p className='last'>{t('privacy.p11')}</p>
        <p className='last'>{t('privacy.p12')}</p>

        <h2 className='sub-headline'>{t('privacy.subtitle7')}</h2>
        <p className='last1'>{t('privacy.p13')}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
