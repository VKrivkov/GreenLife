import React from 'react'
import "./About.css"
import HouseAbout from '../../assets/HouseAbout.jpg'; // Adjust path as needed
import LocationIcon from '../../assets/LocationIcon.svg'; // Adjust path as needed
import GymIcon from '../../assets/GymIcon.svg'; // Adjust path as needed
import PoolIcon from '../../assets/PoolIcon.svg'; // Adjust path as needed
import SecurityIcon from '../../assets/SecurityIcon.svg'; // Adjust path as needed
import SolarIcon from '../../assets/SolarIcon.svg'; // Adjust path as needed
import ECIcon from '../../assets/ECIcon.svg'; // Adjust path as needed
import { Link } from "react-router-dom";


const About = () => {


  return (
    <div id = 'about-section' className="about-project">

      <h2 className='HeadlineAbout'>About the project</h2>

      <div className="content-container-about">

        <div className="image-container-about">
          <img src={HouseAbout} alt="House" />
        </div>

        <div className='text-container-about'> 
          <p className='Slogan'>The best way to be healthy is to be happy</p>
          <ul>
            <li>Beautiful location with park and playground</li>
            <li>Proximity to the sea: <b>1900</b> meters</li>
            <li>Proximity to a supermarket <b>300</b> meters</li>
            <li>Proximity of school and kindergarten <b>400</b> meters</li>
            <li>Utilizing solar energy with 340 sunny days for comfort and savings</li>
            <li>View apartments on the sea from the 2nd floor</li>
            <li>Premium construction quality</li>
          </ul>
        </div>
        
      </div> 
      <div className="icons-container-about">

        <Link to={"/gallery/location"}> 
          <div className="icon-item">
            <img src={LocationIcon}alt="Location" />
            <span>Pervolia, Cyprus</span>
          </div>
        </Link>

        <Link to={"/gallery/solar-panels"}> 
          <div className="icon-item">
            <img src={SolarIcon} alt="Solar Panels" />
            <span>Solar Panels </span>
          </div>
        </Link>

        <Link to={"/gallery/gym"}> 
          <div className="icon-item">
            <img src={GymIcon} alt="Gym" />
            <span>Private Gym</span>
          </div>
        </Link>

        <Link to={"/gallery/security"}> 
          <div className="icon-item">
            <img src={SecurityIcon} alt="Advanced Security" />
            <span>Advanced Security</span>
          </div>
        </Link>

        <Link to={"/gallery/pool"}> 
          <div className="icon-item">
            <img src={PoolIcon} alt="Pool" />
            <span>Indoor Pool</span>
          </div>
        </Link>

        <Link to={"/gallery/EC-charging"}> 
          <div className="icon-item">
            <img src={ECIcon} alt="EC Charging stations" />
            <span>Charging Stations</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default About