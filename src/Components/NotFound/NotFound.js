import React from 'react';
import errorImage from '../../images/404-error-page-not-found.jpg';
const Footer = () => {
    return (
        <div className="mt-5">
            <img src={errorImage} style={{ height: "400px" }} class="rounded mx-auto d-block" alt="" />
        </div>
    );
};

export default Footer;