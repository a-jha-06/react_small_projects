import React, { useState, useEffect } from 'react';
import bannerImage from '../../images/coverpic.png'; // Replace with your image path

function HeroBanner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handle window resizing for responsiveness
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Styles change based on screen size
   const bannerStyles = {
  backgroundImage: bannerImage ? `url(${bannerImage})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: windowWidth <= 768 ? '20vh' : '50vh', // Adjusted for better mobile visibility
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: windowWidth <= 768 ? '16px' : '40px',
  transition: 'all 0.3s ease-in-out', // Smooth resizing
};
    return (
        <div style={bannerStyles}>
            
        </div>
    );
}

export default HeroBanner;
