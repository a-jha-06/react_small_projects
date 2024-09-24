// Footer.js
import React from 'react';
import './footer.css'; // Optional: Import your CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4>Thank you for visiting this website</h4>
                <p>Email: amishajha06@gmail.com</p>
                <p>Phone: 8017237527</p>
                <div className="social-links">
                    <a href="https://github.com/a-jha-06" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/amisha-jha-06999s/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Amisha Jha. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

