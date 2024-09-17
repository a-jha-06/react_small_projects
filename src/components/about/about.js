import React from 'react';
import './About.css'; // Import the CSS file

function About() {
    return (
        <div className="section-background">

            <h2 className="heading">Professional Summary</h2>
            <ol className="list">
                <li className="list-item">
                    At <span className="highlight">Markrich Apparel</span>, my role as Senior Associate Tech is to bring the cutting-edge
                    of retail technology to life, integrating Shopify's robust features with meticulous
                    data analysis. Our team's innovations are reshaping the e-commerce landscape, driven
                    by my background in computer engineering
                    and a keen eye for operational efficiency.
                </li>
                <li className="list-item">
                    Previously, as aFrontend Developer at  <span className="highlight">Sublimis Technologies </span>, I forged a strong link
                    between design and backend development, contributing to dynamic e-commerce solutions.
                    This role capitalized on my technical skills and operational insight, ensuring
                    seamless user experiences and high-performing platforms that align with SEO best practices.
                </li>
            </ol>

        </div>
    );
}

export default About;
