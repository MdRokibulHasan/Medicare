import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowDoctor = (props) => {
    const { name, img, specialist, id } = props.filterdata;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <span className="text-center"> <Card.Title>{name}</Card.Title>
                        <p className="text-muted">{specialist}</p> </span>
                </Card.Body>
                <Link to={`doctordetails/${id}`}>
                    <button className="btn-details" >Details</button>
                </Link>
            </Card>
        </div>
    );
};

export default ShowDoctor;