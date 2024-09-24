import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Bh from '../../images/logo.jpg';
import IND from '../../images/indivisual logo.png';
import EG from '../../images/eglogo.755bcfe6.png';
import Mas from '../../images/masarratlogo.55f83788.png';
import './cards.css';

function Cards() {
    return (
        <div>
            <h2 className='heading'>Projects</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">

                <div class="col">

                    <div class="card">
                        <img src={Bh} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Bombay High</h5>
                            <p class="card-text">Bombay High is an online fashion retail store
                                specializing in high-end apparel. The project involved developing
                                and optimizing the website’s user interface to provide a seamless
                                shopping experience. The goal was to enhance user engagement,
                                streamline product discovery, and boost conversions.</p>
                            <a href='https://bombayhigh.co.in/' class="button">Visit Website</a>
                        </div>
                    </div>
                </div>
                <div class="col">

                    <div class="card">
                        <img src={IND} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Indivisual</h5>
                            <p class="card-text">Indivisual Clothing is a niche e-commerce store
                                focusing on personalized, high-quality apparel. The project involved
                                developing the front end of the store and ensuring a seamless and
                                personalized shopping experience. The aim was to integrate custom
                                features for product customization and optimize the site's performance
                                for a responsive, user-friendly interface.</p>
                            <a href='https://indivisualclothing.com/' class="button">Visit Website</a>

                        </div>
                    </div>
                </div>
                <div class="col">

                    <div class="card">
                        <img src={EG} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Eternal Ganges</h5>
                            <p class="card-text">Eternal Ganges is an e-commerce platform offering spiritual
                                and devotional products. The project aimed to build a fast, scalable, and
                                SEO-friendly website using modern web technologies, with a focus on providing
                                a smooth user experience. By leveraging Next.js, the site was optimized for
                                performance and server-side rendering (SSR), ensuring fast load times and improved
                                search engine visibility.</p>
                            <a href='https://www.eternalganges.com/' class="button">Visit Website</a>
                        </div>
                    </div>
                </div>
                <div class="col">

                    <div class="card">
                        <img src={Mas} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Masarrat</h5>
                            <p class="card-text">Masarrat is an e-commerce platform that specializes in
                                offering high-quality acrylic products. The project aimed to build a fast,
                                scalable, and visually appealing website using Next.js to showcase and
                                sell a variety of premium acrylic products. The focus was on creating an
                                efficient and responsive user interface while optimizing for performance
                                and SEO.</p>
                            <a href='https://www.masarrat.in/' class="button">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
