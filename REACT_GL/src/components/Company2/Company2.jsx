import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Company2.css'


export const Company2 = () => {
    const { t } = useTranslation();
  return (
    <>
    <div className='gallery-container'>
        <div className='gallery-header'> 
          <h1 className='headline-company'>{t('company2.headline')}</h1>
          <div className='text'>
            <p>{t('company2.p1')}</p>
            <p>{t('company2.p2')}</p>
          </div>
        </div>
        </div>
    </>
  )

}
