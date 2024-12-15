import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { flatarray } from '../flatarray'; // Ensure this path is correct
import { useTranslation } from 'react-i18next';

import FloorIcon from '../../../assets/FloorIcon.svg';
import ParkIcon from '../../../assets/ParkIcon.svg';
import LeafIcon from '../../../assets/LeafIcon.svg';
import SecurityIcon from '../../../assets/SecurityIcon.svg';
import TerraceIcon from '../../../assets/TerraceIcon.webp';
import PoolIcon from '../../../assets/PoolIcon.svg';
import RooftopIcon from '../../../assets/RooftopIcon.webp';
import './SingleFlatCard.css';
import text1 from '../../../assets/1st.pdf';
import text2 from '../../../assets/2nd.pdf';
import text3 from '../../../assets/3rd.pdf';



{/*
[0] - specials;
[1] - amount of; 
[2] - total area; 
[3] - plan image; 
[4] - price; 
[5] - floor; 
[6] - highlighted full plan image; 
[7] - array of photos;
[8] - balkony area;
[9] - storage are;
*/}





const SingleFlatCard = () => {
    const { t } = useTranslation();


    const solarsHandle = (count) => {
        return count == 1 ? t('singleFlat.floors') : t('singleFlat.solarPanelsInstallation');
    }
  
    const getRoomWord = (count) => {
        return count == 1 ? t('room.singular') : t('room.plural');
    };

  
    

    const [isFlipped, setIsFlipped] = useState(false);
    const { flatIndex } = useParams();
    const flat = flatarray[parseInt(flatIndex, 10)];

    if (!flat) {
        return <div>{t('singleFlat.noFlatData')}</div>;
    }

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handlePDFDownload = (floor) => {
        let pdfUrl;
        if (floor == 0){
            pdfUrl = text1;
        }
        if (floor == 1){
            pdfUrl = text2;
        }
        if (floor == 2){
            pdfUrl = text3;
        }
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'ApartmentDetails.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleIconChange = () => {
        switch (flat[0]) {
            case 'veranda':
                return <>
                    <img src={TerraceIcon} alt={t('singleFlat.privateVeranda')} />
                    <span>{t('singleFlat.privateVeranda')}</span>
                </>;
            case 'rooftop':
                return <>
                    <img src={RooftopIcon} alt={t('singleFlat.rooftopGarden')} />
                    <span>{t('singleFlat.rooftopGarden')}</span>
                </>;
            case 'sea view':
                return <>
                    <img src={PoolIcon} alt={t('singleFlat.seaView')} />
                    <span>{t('singleFlat.seaView')}</span>
                </>;
            default:
                return <>
                    <img src={ParkIcon} alt={t('singleFlat.parkViews')} />
                    <span>{t('singleFlat.parkViews')}</span>
                </>;
        }
    };

    return (
        <div className='single-flat-card-container'>
            <div className='flat-text-container'>
                <div className='single-flat-head'>
                    <h1>{flat[2]} m²</h1>
                    <p>{t('singleFlat.totalArea')}</p>
                </div>
                <div className='room-floor-container'>
                    <h6 className='h6-floor'>{flat[5]} {t('singleFlat.floor')}</h6>
                    <h5>{flat[1]} {getRoomWord(flat[1])}</h5>
                </div>
                <ul>
                    <li>{t('singleFlat.livingArea')}{flat[9]}m²{t('singleFlat.balkonySpace')}{flat[8]}m².</li>
                    <li>{t('singleFlat.parkingSpotIncluded')}</li>
                    <li>{solarsHandle(flat[1])}</li>
                </ul>
            </div>

            <div className='plan-flat-container' onClick={handleFlip}>
                <div className={`card-plan ${isFlipped ? 'flipped' : ''}`}>
                    <img className='plan-front' src={flat[3]} alt='Plan of the flat'></img>
                    <img className='plan-back' src={flat[6]} alt='Plan of the house'></img>
                </div>
                <p>{t('singleFlat.clickToFlip')}</p>
            </div>

            <div className='flat-footer-container'>
                <div className='price-contact-container'>
                    {/* <p>{t('singleFlat.price')}:</p>
                    <h2>{flat[4]}</h2> */}
                    <div className='contact-pdf-buttons'>
                        <Link to="/contact" className="contact-us-button">{t('singleFlat.contactUs')}</Link>
                        <p onClick={() => handlePDFDownload(flat[5])} style={{ cursor: 'pointer' }}>{t('singleFlat.viewPDF')}</p>
                    </div>
                </div>

                <div className='single-flat-icon-container'>
                    <div className="flat-icon-item">
                        <img src={FloorIcon} alt={t('singleFlat.floorHeating')} />
                        <span>{t('singleFlat.floorHeating')}</span>
                    </div>
                    <div className="flat-icon-item">
                        {handleIconChange()}
                    </div>
                    <div className="flat-icon-item">
                        <img src={LeafIcon} alt={t('singleFlat.energyEfficiency')} />
                        <span>{t('singleFlat.energyEfficiency')}</span>
                    </div>
                    <div className="flat-icon-item">
                        <img src={SecurityIcon} alt={t('singleFlat.securitySystem')} />
                        <span>{t('singleFlat.securitySystem')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFlatCard;
