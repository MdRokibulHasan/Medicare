import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMedicare from '../../Hooks/useMedicare';
import ShowServices from '../Sheare/ShowServices';




const Services = () => {
    const [values] = useMedicare();
    // console.log(values);
    return (
        <div>
            <Container>
                <Row xs={1} md={3} className="g-4">


                    {
                        values?.services?.map(filterdata => (< ShowServices filterdata={filterdata} key={filterdata.id} ></ShowServices>))
                    }

                </Row>
            </Container>
        </div >

    );
};

export default Services;