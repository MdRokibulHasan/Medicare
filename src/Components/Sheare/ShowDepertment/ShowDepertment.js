import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowDepertment = (props) => {
    console.log(props);
    const { dp_name, img, description, id } = props.department;
    return (
        <div>
            <Col>
                <Card className="service-card">
                    {/* <span id="image"><Card.Img className="services-image roundedCircle" src={img} /></span> */}
                    <Image className="services-image" src={img} roundedCircle />
                    <Card.Body>
                        <Card.Title><h3>{dp_name}</h3> </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`departmentdetails/${id}`}>
                        <button className="btn-details" >Details</button>
                    </Link>
                </Card>
            </Col>
        </div>
    );
};

export default ShowDepertment;