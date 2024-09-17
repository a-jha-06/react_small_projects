import React from 'react';
import fullstack from '../../images/fullstack.png';
import cssbasic from '../../images/Css.png';
import reactbasic from '../../images/React BAsic.png';
import problem from '../../images/Problem Solving.png';
import frontend from '../../images/Frontend Developer.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for carousel functionality

function Carousel() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Certifications</h2>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={frontend} className="d-block w-100" alt="Frontend Developer" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={reactbasic} className="d-block w-100" alt="React Basic" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={cssbasic} className="d-block w-100" alt="CSS Basic" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={problem} className="d-block w-100" alt="Problem Solving" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={fullstack} className="d-block w-100" alt="Fullstack Developer" />
                    </div>
                </div>
                {/* Carousel controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
