import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Company.css'


export const Company = () => {
    const { t } = useTranslation();
  return (
    <>
    <div className='gallery-container'>
        <div className='gallery-header'> 
            <div className='space'/>
            <h1 className='headline-company'>{t('company.headline')}</h1>
            <div className='text'>
              <p className='first1'>{t('company.p1')}</p>
              <p className='first1'>{t('company.p2')} {t('company.p3')} <a href='https://www.instagram.com/vershky_villas?igsh=aGg0MmR1MXVvcjR0&utm_source=qr' style={{fontWeight:"500", textDecoration:"underline", color:"#2E2A1C"}}><label style={{cursor:"pointer"}}>Vershky Villas</label></a>, {t('company.li1')}; <a href='https://www.instagram.com/porto_buro?igsh=OHRvMDNrYXplcXQ5' style={{fontWeight:"500", textDecoration:"underline", color:"#2E2A1C"}}><label style={{cursor:"pointer"}}>Park Residences</label></a>, {t('company.li2')} </p>
              <p className='last1'>{t('company.p4')}</p>
            </div>
        </div>
        </div>
    </>
  )

}
