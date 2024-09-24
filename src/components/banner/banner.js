import React, { useState, useEffect } from 'react';
import bannerImage from '../../images/Cover.png'; // Replace with your image path

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
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: windowWidth <= 768 ? '12vh' : '50vh', // Smaller height for mobile
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: windowWidth <= 768 ? '20px' : '40px', // Adjust padding for smaller screens
    };

    return (
        <div style={bannerStyles}>
            
        </div>
    );
}

export default HeroBanner;
