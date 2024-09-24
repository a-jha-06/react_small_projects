import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './navbar.css'; // Import the CSS file for styles

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar container">
            <div className="navbar-container">
                <Link to="/home"><div className="logo">My Website</div></Link>
                <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>

                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>
                    <li><Link to="/contact">Contact Info</Link></li>
                </ul>
            </div>
        </nav>

        
    );
}

export default Navbar;
