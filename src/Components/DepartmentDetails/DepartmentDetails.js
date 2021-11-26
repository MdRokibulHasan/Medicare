import React, { useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DpartmentDetails.css';

const DepartmentDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetch('/medicare.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const ExactItem = data?.department?.filter(td => td.id == id);
    console.log(ExactItem);
    return (
        <div>
            <Col>
                <Card className="details-card">
                    {/* <span id="image"><Card.Img className="services-image roundedCircle" src={img} /></span> */}
                    <Image className="show-image" src={ExactItem?.[0]?.img} roundedCircle />
                    <Card.Body>
                        <Card.Title><h3>{ExactItem?.[0]?.dp_name}</h3> </Card.Title>
                        <Card.Text>
                            {ExactItem?.[0]?.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DepartmentDetails;