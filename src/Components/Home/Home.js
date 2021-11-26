import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMedicare from '../../Hooks/useMedicare';
import ShowDepertment from '../Sheare/ShowDepertment/ShowDepertment';
import Banner from '../Sheare/Banner/Banner';
import ShowServices from '../Sheare/ShowServices';
import image from '../../images/doctor.jpg';
import dep_image from '../../images/doctorhand.jpg';
import './Home.css'
import ShowDoctor from '../Sheare/ShowDoctor';



const Home = () => {
    const [values] = useMedicare();
    return (
        <div>

            <Banner></Banner>

            <div>
                <div className="services-text mb-3">
                    <h1>OUR SERVICES</h1>
                    <p> <span id="diff-services"> TO CHOOSE FROM</span></p>
                </div>

                <Container>
                    <Row xs={1} md={3} className="g-4">


                        {
                            values?.services?.map(filterdata => (< ShowServices filterdata={filterdata} key={filterdata.id} ></ShowServices>))
                        }

                    </Row>
                </Container>

            </div>
            <div className="container d-flex m-5">
                <div className="col-md-6">
                    <img src={image} alt="" />
                </div>
                <div className="col-md-6">
                    <p>ABOUT MEDICARE</p>
                    <h3>Medical specialty concerned with the care of acutely ill hospitalized patients</h3>
                    <span><p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p></span>

                    <button className=" book-button">Appointment Now</button>
                </div>
            </div>
            <div className="consutation">
                <div className=" ">
                    <h1>We Provide Free Health Care Consultation</h1>
                    <p>Your Health is Our Top Priority with Comprehensive, Affordable medical.</p>
                </div>
                <div className=" ">
                    <button className="free-btn">Free Consutation</button>
                </div>
            </div>
            <div className="text-center m-3">
                <p>DEPERTMENTS</p>
                <h1>Clinic Departments</h1>
            </div>
            <div className="depertment d-flex m-5 ">
                <div>
                    <img src={dep_image} alt="" />
                </div>
                <div>
                    <Container>
                        <Row xs={1} md={2} className="g-4">


                            {
                                values?.department?.slice(0, 4).map(department => (< ShowDepertment department={department} key={department.id} ></ShowDepertment>))
                            }

                        </Row>
                    </Container>
                </div>
            </div>
            <div className="doctor">
                <div className="text-center m-5">
                    <p>DOCTORS</p>
                    <h1>Our Qualified Doctors</h1>
                </div>
                <Container>
                    <Row xs={1} md={3} className="card-title mb-2">

                        {
                            values?.doctor?.slice(0, 3).map(filterdata => (< ShowDoctor filterdata={filterdata} key={filterdata.id}></ShowDoctor>))
                        }

                    </Row>
                </Container>

            </div>

        </div>
    );
};

export default Home;