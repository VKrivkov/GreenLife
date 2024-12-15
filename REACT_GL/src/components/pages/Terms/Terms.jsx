import React from 'react';
import { useTranslation } from 'react-i18next';
import './Company2.css';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className='location-gallery'>
      <div className='location-gallery-header'>
        <h1 className='headline-units'>{t('terms.headline')}</h1>
        <p className='first'>{t('terms.intro')}</p>

        <h2 className='sub-headline'>{t('terms.subtitle1')}</h2>
        <p className='last'>{t('terms.p1')}</p>
        <p className='last'>{t('terms.p2')}</p>

        <h2 className='sub-headline'>{t('terms.subtitle2')}</h2>
        <p className='last'>{t('terms.p3')}</p>
        <p className='last'>{t('terms.p4')}</p>

        <h2 className='sub-headline'>{t('terms.subtitle3')}</h2>
        <p className='last'>{t('terms.p5')}</p>
        <p className='last'>{t('terms.p6')}</p>

        <h2 className='sub-headline'>{t('terms.subtitle4')}</h2>
        <p className='last'>{t('terms.p7')}</p>
        <p className='last'>{t('terms.p8')}</p>

        <h2 className='sub-headline'>{t('terms.subtitle5')}</h2>
        <p className='last'>{t('terms.p9')}</p>
        <p className='last'>{t('terms.p10')}</p>

        <h2 className='sub-headline'>{t('terms.subtitle6')}</h2>
        <p className='last'>{t('terms.p11')}</p>
        <p className='last'>{t('terms.p12')}</p>

        <h2 className='sub-headline'>{t('terms.subtitle7')}</h2>
        <p className='last1'>{t('terms.p13')}</p>
      </div>
    </div>
  );
};

export default Terms;

