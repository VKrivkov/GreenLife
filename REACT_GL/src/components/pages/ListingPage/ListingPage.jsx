import React from 'react';
import Card from './Card';
import './ListingPage.css';
import { Link } from "react-router-dom";
import { flatarray } from '../flatarray';'../flatarray.js'




export const ListingPage = () => {

    

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
      
        // Calculate the position of the section
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      
        // Define the smooth scroll function
        const smoothScroll = (targetPosition) => {
          const startPosition = window.pageYOffset;
          const distance = targetPosition - 175 - startPosition;
          const duration = 800; // Duration of the scroll animation in milliseconds
          let startTime = null;
      
          const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const nextScrollPosition = ease(timeElapsed, startPosition, distance, duration);
      
            window.scrollTo(0, nextScrollPosition);
      
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };
      
          const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          };
      
          requestAnimationFrame(animation);
        };
      
        // Execute the smooth scroll function
        smoothScroll(sectionTop);
      };
      

    return (
        <div className='listing-page-container'>
            <div className='selector-nav-container'>
                <a onClick={() => scrollToSection('one-section')} className="selector-link">One Bedroom</a>
                <a onClick={() => scrollToSection('two-section')} className="selector-link">Two Bedrooms</a>
                <a onClick={() => scrollToSection('three-section')} className="selector-link">Three Bedrooms</a>
            </div>
            <div className='cards-array'>
                <div id='one-section' className='one-section'>
                    {flatarray.slice(0, 4).map((flat, index) => (
                        <Link key={`one-${index}`} to={`/single-flat-card/${index}`} className="card-link">
                            <Card 
                                title={flat[0]} 
                                roomCount={flat[1]} 
                                area={flat[2]} 
                                planImage={flat[3]}
                            />
                        </Link>
                    ))}
                </div>
                <div id='two-section' className='two-section'>
                    {flatarray.slice(4, 8).map((flat, index) => (
                        <Link key={`two-${index}`} to={ `/single-flat-card/${4+index}` } className="card-link">
                            <Card 
                                title={flat[0]} 
                                roomCount={flat[1]} 
                                area={flat[2]} 
                                planImage={flat[3]}
                            />
                        </Link>
                    ))}
                </div>
                <div id='three-section' className='three-section'>
                    {flatarray.slice(8).map((flat, index) => (
                        <Link key={`three-${index}`} to={ `/single-flat-card/${8+index}` } className="card-link">
                            <Card 
                                title={flat[0]} 
                                roomCount={flat[1]} 
                                area={flat[2]} 
                                planImage={flat[3]}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
