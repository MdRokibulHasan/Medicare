import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMedicare from '../../Hooks/useMedicare';
import ShowDepertment from '../Sheare/ShowDepertment/ShowDepertment';

const Departments = (props) => {
    const [values] = useMedicare();
    return (
        <div>
            <Container>
                <Row xs={1} md={3} className="g-4">


                    {
                        values?.department?.map(department => (< ShowDepertment department={department} key={department.id} ></ShowDepertment>))
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Departments;