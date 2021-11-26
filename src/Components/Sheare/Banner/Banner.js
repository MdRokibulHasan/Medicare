import React from 'react';

import './Banner.css'

const Banner = () => {

    return (
        <div className="banner ">
            <div className="col-md-6 container">
                <p >--  </p>
                <div>
                    <h1 id="banner-text">We are here
                        for your Care</h1>
                    <p>Anyone can take the service from here to there is much easier.</p>
                </div>
                <button className=" book-button">Appointment Now</button>
            </div>

        </div>
    );
};

export default Banner;