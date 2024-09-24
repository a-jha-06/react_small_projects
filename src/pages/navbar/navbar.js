import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './navbar.css'; // Import the CSS file for styles
import Aj from "../../images/Aj logo.png"


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar container" >
            <div className="navbar-container" >

                <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>

                </div>
                <div><Link to="/home"><img src={Aj} className="logo" alt='logo' /></Link></div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>

                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>

                </ul>
            </div>
        </nav>




    );
}

export default Navbar;
