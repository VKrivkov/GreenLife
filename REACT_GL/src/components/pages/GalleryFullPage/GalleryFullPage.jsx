import React from 'react'
import { useParams } from 'react-router-dom'
import GalleryComponent from '../../Gallery/GalleryComponent';
import Location from '../Location/Location.jsx';

import {solarArray, gymArray, poolArray} from './galleryfull.js'
import './GalleryFullPage.css'

const GalleryFullPage = () => {

const { path } = useParams();
console.log (path);

if (path == 'location') {
  return (
    <div className='location-gallery'>
        <div className='location-gallery-header'> 
          <h1>Location</h1>
          <p>Nestled in the heart of Pervolia,
            just a stone's throw from the historical city of Larnaca,
            GreenLife offers an exclusive enclave of 19 meticulously designed premium apartments.
            GreenLife is more than a residence; it's a commitment to a greener
             future and a nod to the historical richness of Pervolia.</p>
        </div>  
        <Location/>
    </div>
  )
}

if (path == 'gym') {
  return (
    <div className='gym-gallery'>
      <div className='gym-gallery-header'> 

        <h1>Private Gym</h1>
        <p>Company GreenLife,
           offers its residents access to a private gym.
            The private gym is equipped with state-of-the-art fitness equipment, 
            catering to a wide range of preferences and fitness levels. 
            From cardio machines to free weights, resistance training equipment, 
            and dedicated areas for yoga and stretching.</p>
      </div>  

        <GalleryComponent images = {gymArray}/>
    </div>
  )
}


if (path == 'solar-panels') {
  return (
    <div className='solar-panels-gallery'>
      <div className='solar-panels-gallery-header'> 

        <h1>Solar Panels</h1>
        <p>Solar panels offer more than environmental advantages; 
           they significantly ease the utilization of existing infrastructure,
           such as a pool and a gym, due to considerable reductions in electricity costs, 
           enhancing operational efficiency.</p>
        </div>
        <GalleryComponent images = {solarArray}/>
    </div>
  )
}





if (path == 'pool') {
  return (
    <div className='pool-gallery'>
      <div className='pool-gallery-header'> 
        <h1>Indoor Pool</h1>
        <p>Company GreenLife extends its commitment to the well-being of its residents by offering access to an exclusive indoor pool.
           This facility is designed to engage in a healthy, active lifestyle regardless of the season. 
        </p>
      </div>
        <GalleryComponent images = {poolArray}/>
    </div>
  )
}




else {
  return <div className='NoDataFound'>No pictures available. Please go back to the main page.</div>;
}
}

export default GalleryFullPage