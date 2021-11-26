import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMedicare from '../../Hooks/useMedicare';
import ShowDoctor from '../Sheare/ShowDoctor';

const Doctors = () => {
    const [values] = useMedicare();
    return (
        <div>
            <Container>
                <Row xs={1} md={3} className="g-4">


                    {
                        values?.doctor?.map(filterdata => (< ShowDoctor filterdata={filterdata} key={filterdata.id}></ShowDoctor>))
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Doctors;