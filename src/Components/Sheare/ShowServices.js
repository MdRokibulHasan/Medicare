import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShowServices.css';

const ShowServices = (props) => {
    const { se_name, img, description, id } = props.filterdata;
    // console.log(props);
    return (
        <div>
            <Col>
                <Card className="service-card">
                    {/* <span id="image"><Card.Img className="services-image roundedCircle" src={img} /></span> */}
                    <Image className="services-image" src={img} roundedCircle />
                    <Card.Body>
                        <Card.Title><h3>{se_name}</h3> </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`details/${id}`}>
                        <button className="btn-details" >Details</button>
                    </Link>

                </Card>

            </Col>
        </div>
    );
};
export default ShowServices;