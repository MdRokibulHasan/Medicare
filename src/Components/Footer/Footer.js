import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="m-3">
                    <h2>Medicare</h2>
                    <div>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                    </div>
                </div>
                <div className="m-3">
                    <h2>Departments</h2>
                    <div>
                        <ul>
                            <li to="">Neurology</li>
                            <li to="">Opthalmology</li>
                            <li to="">Nuclear Magnetic</li>
                            <li to="">Surgical</li>
                            <li to="">Cardiology</li>
                            <li to="">Dental</li>
                        </ul>
                    </div>
                </div>
                <div className="m-3">
                    <h2>Links</h2>
                    <div>
                        <ul>
                            <li to="">Home</li>
                            <li to="">About</li>
                            <li to="">Departments</li>
                            <li to="">Doctors</li>
                            <li to="">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="m-3">
                    <h2>Services</h2>
                    <div>
                        <ul>
                            <li to="">Emergency Services</li>
                            <li to="">Qualified Doctors</li>
                            <li to="">Outdoors Checkup</li>
                            <li to="">24 Hours Services</li>
                        </ul>
                    </div>
                </div>
                <div className="m-3">
                    <h2>Have a Questions?</h2>
                    <div>
                        <ul>
                            <li to="">	203 Fake St. Mountain View, San Francisco, California, USA</li>
                            <li to="">+2 392 3929 210</li>
                            <li to="">	info@yourdomain.com</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center"><p>Copyright ©2021 All rights reserved | This template is made with  by Medicare</p></div>
        </div>
    );
};

export default Footer;