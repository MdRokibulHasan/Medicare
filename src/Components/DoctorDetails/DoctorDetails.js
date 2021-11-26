import React, { useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetch('/medicare.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const ExactItem2 = data?.doctor?.filter(td => td.id == id);
    console.log(ExactItem2);
    return (
        <Col>
            <Card className="details-card">
                {/* <span id="image"><Card.Img className="services-image roundedCircle" src={img} /></span> */}
                <Image className="show-image" src={ExactItem2?.[0]?.img} roundedCircle />
                <Card.Body>
                    <Card.Title><h3>{ExactItem2?.[0]?.dp_name}</h3> </Card.Title>
                    <Card.Title><h3>{ExactItem2?.[0]?.specialist}</h3> </Card.Title>
                    <Card.Text>
                        {ExactItem2?.[0]?.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DoctorDetails; <h1>this is doctor page</h1>