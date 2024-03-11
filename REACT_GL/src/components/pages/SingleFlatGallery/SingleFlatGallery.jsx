import React from 'react'
import './SingleFlatGallery.css'
import GalleryComponent from '../../Gallery/GalleryComponent'
import { flatarray } from '../flatarray'; // Ensure this path is correct
import { useParams } from "react-router-dom";
{/*
[0] - specials;
[1] - amount of rooms; 
[2] - total area; 
[3] - plan image; 
[4] - price; 
[5] - floor; 
[6] - highlighted full plan image; 
[7] - array of photos;
*/}


const SingleFlatGallery = () => {
  const { flatIndex } = useParams();
  const flat = flatarray[parseInt(flatIndex, 10)]; // Parse the flatIndex to number
  console.log (flat, flatIndex);


  // Check if the flat exists
  if (!flat) {
    return <div>No flat data available. Please go back to the listing page.</div>;
  }

  return (
    <div className='single-flat-gallery-container'>
        <div className='single-flat-gallery-header'>
            <h1>Views and Location</h1>
            <p>Explore GreenLife's gallery: elegant interiors that speak comfort, 
                stunning exteriors blending with nature, and captivating views that promise tranquility. 
                Experience the luxury of living here through each carefully curated image.
            </p>
        </div>
        <GalleryComponent images = {flat[7]}/>
    </div>
  )
}

export default SingleFlatGallery