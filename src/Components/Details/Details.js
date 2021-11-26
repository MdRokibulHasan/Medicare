import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, Col, Image } from 'react-bootstrap';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetch('/medicare.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const ExactItem1 = data?.services?.filter(td => td.id == id);
    console.log(ExactItem1);
    return (

        <Col>
            <Card className="details-card">
                <Image className="show-image" src={ExactItem1?.[0]?.img} />
                <Card.Body>
                    <Card.Title><h3>{ExactItem1?.[0]?.se_name}</h3> </Card.Title>
                    <Card.Text>
                        {ExactItem1?.[0]?.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Details;