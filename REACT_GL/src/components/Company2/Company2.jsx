import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Company2.css'


export const Company2 = () => {
    const { t } = useTranslation();
  return (
    <>
    <div className='location-gallery'>
        <div className='location-gallery-header'> 
            <h1 className='headline-units'>{t('company2.headline')}</h1>
            <p className='first'>{t('company2.p1')}</p>
            <p className='last'>{t('company2.p2')}</p>
        </div>
        </div>
    </>
  )

}
