import React from 'react'
import './Benefits.css'
import Quality from '../../assets/Quality.jpg';
import Community from '../../assets/Community.jpg';
import Solars from '../../assets/Solars.jpg';


const Benefits = () => {
  return (
    <div id = 'benefits-section' className='benefits-container'>
      <div className='head-container'>
        <h2 className='HeadlineBenefits'>Benefits</h2>
        <p>Discover the unparalleled advantages of living at GreenLife</p>
      </div>
      <div className='content-container'>
        <div className='quality-container'>
          <img src = {Quality} alt = 'Building Quality'/>
          <h6>Construction Quality</h6>
          <p>Our buildings are known for their exceptional quality. 
            We focus on durability and design, 
            ensuring every detail is crafted to perfection.</p>
        </div>
        <div className='solars-container'>
          <img src = {Solars} alt = 'Solars Panels'/>
          <h6>Leveraging Solar Panels</h6>
          <p>Solar panels offer more than environmental advantages;
             they significantly ease the utilization of existing infrastructure,
             such as a pool and a gym, due to considerable reductions in electricity costs,
             enhancing operational efficiency.</p>
        </div>
        <div className='community-container'>
          <img src = {Community} alt = 'Community Spaces'/>
          <h6>Enhanced Community Spaces</h6>
          <p>Our neighborhood features charming paths and a large park, 
            with no further construction to preserve its tranquility.</p>
        </div>
      </div>
    </div>
  )
}

export default Benefits