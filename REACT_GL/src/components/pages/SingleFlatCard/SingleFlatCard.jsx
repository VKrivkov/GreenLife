import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import { flatarray } from '../flatarray'; // Ensure this path is correct
import {Link} from "react-router-dom"
import FloorIcon from '../../../assets/FloorIcon.svg'; // Adjust path as needed
import ParkIcon from '../../../assets/ParkIcon.svg'; // Adjust path as needed
import LeafIcon from '../../../assets/LeafIcon.svg'; // Adjust path as needed
import SecurityIcon from '../../../assets/SecurityIcon.svg'; // Adjust path as needed
import TerraceIcon from '../../../assets/TerraceIcon.png'
import PoolIcon from '../../../assets/PoolIcon.svg'
import RooftopIcon from '../../../assets/RooftopIcon.png'

import './SingleFlatCard.css'
import text1 from '../../../assets/text1.pdf'



const SingleFlatCard = () => {


    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    }

      // Function to handle PDF download
  const handlePDFDownload = () => {
    const pdfUrl = text1;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Hello.pdf'; // Optional: Specify a filename for the downloaded file
    document.body.appendChild(link); // Append to body
    link.click(); // Simulate click
    document.body.removeChild(link); // Remove the link when done
  };


  const { flatIndex } = useParams();
  const flat = flatarray[parseInt(flatIndex, 10)]; // Parse the flatIndex to number
  console.log (flatIndex);

  // Check if the flat exists
  if (!flat) {
    return <div>No flat data available. Please go back to the listing page.</div>;
  }

  {/*
[0] - specials;
[1] - amount of rooms; 
[2] - total area; 
[3] - plan image; 
[4] - price; 
[5] - floor; 
[6] - highlighted full plan image; 
*/}

const handleIconChange = () =>{
  if (flat[0] == ''){
    return <>
     <img src={ParkIcon} alt="Park views" />
        <span>Park views</span>
    </>;
  }
  if (flat[0] == 'veranda'){
    return <>
      <img src={TerraceIcon} alt="Veranda" />
        <span>Private Veranda</span>
    </>
  }
  if (flat[0] == 'rooftop'){
    return <>
     <img src={RooftopIcon} alt="Rooftop Garden" />
        <span>Rooftop Garden</span>
    </>
  }

  if (flat[0] == 'sea view'){
    return <>
     <img src={PoolIcon} alt="Sea View" />
        <span>Sea View</span>
    </>
  }
}


  return (
    <div className='single-flat-card-container'>
      
      <div className='flat-text-container'>
        
        <div className='single-flat-head'>
          <h1>{flat[2]} m²</h1>
          <p> - Total area</p>
        </div>

        <div className='room-floor-container'>
          <h6 className='h6-floor'>{flat[5]} floor</h6>
          <h5>{flat[1]}</h5>
        </div>

        <ul>
          <li>Living area: 42.5m², balcony space: 8.5m², rooftop garden: 3.2m².</li>
          <li>One on-ground parking spot is included in the price of the apartment</li>
          <li>Solar panels installation for an added cost of 5,000 USD.</li>
        </ul>

      </div>

      <div className='plan-flat-container' onClick={handleFlip}>
      <div className={`card-plan ${isFlipped ? 'flipped' : ''}`}>
        <img className='plan-front' src={flat[3]} alt='Plan of the flat'></img>
        <img className='plan-back' src={flat[6]} alt='Plan of the house'></img>
      </div>
      <p>Click to flip the card</p>
    </div>

    <div className='flat-footer-container'> 

        <div className='price-contact-container'>
          <p>Price: </p>
          <h2>{flat[4]}</h2>
          
          <div className='contact-pdf-buttons'>
            <Link to="/contact" className="contact-us-button">Contact Us</Link>
            <p onClick={handlePDFDownload} style={{cursor: 'pointer'}}>View PDF</p>
          </div>

        </div>


        <div className='single-flat-icon-container'>
          <div className="flat-icon-item">
          <img src={FloorIcon} alt="Floor Heating" />
            <span>Floor heating</span>
          </div>
          <div className="flat-icon-item">
           {handleIconChange()}
          </div>
           <div className="flat-icon-item">
            <img src={LeafIcon} alt="Energy Efficiency" />
            <span>Energy Efficiency</span>
          </div>
          <div className="flat-icon-item">
            <img src={SecurityIcon} alt="Security Systems" />
            <span>Security System</span>
          </div>
        </div>
    </div>
  </div>
  );
};

export default SingleFlatCard;
