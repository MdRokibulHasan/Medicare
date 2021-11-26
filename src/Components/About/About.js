import React from 'react';
import aboutImg from '../../images/banner1.jpg'
const About = () => {
    return (
        <div>
            <img src={aboutImg} alt="" />
            <h1 className="text-center">WE Try Our Best Services Provide You</h1>
            <p className="text-center">We try our best so that patients can return home in good health.We always try to treat everyone with our skilled doctors</p>
        </div>
    );
};

export default About;