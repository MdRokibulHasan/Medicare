import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import logo from '../../../images/Medicare-logo.png';
import './Header.css';

const Header = () => {
    const { logOut, user } = useFirebase();
    /*   let storUser = "";
      if (localStorage) {
          storUser = localStorage.getItem("email")
      } */
    return (
        <div className="mt-3">
            <Navbar bg="light" variant="light">
                <Container className="header-main ">
                    <img className="banner-image " src={logo} alt="" />
                    <Navbar.Brand href="#home">{ }</Navbar.Brand>
                    <Nav className=" header-top">

                        <NavLink to="#home">Help Desk</NavLink>
                        <NavLink to="#features">Emergency Services</NavLink>
                        <NavLink to="#pricing">Appointment</NavLink>

                    </Nav>
                </Container>
            </Navbar>

            <div>
                <Navbar className="home-nav " variant="dark">
                    <Container>

                        <Nav className="header">

                            <NavLink to="/home">Home </NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/depertment">Depertment</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/doctor">Doctors</NavLink>
                            <NavLink to="/contract">Contact</NavLink>

                            {user?.email ? (<button onClick={logOut} className="btn btn-denger">Log Out</button>
                            ) : (<NavLink to="/login">Sing In</NavLink>)
                            }
                            {!user?.email && <NavLink to="/register">Sing Up</NavLink>}
                            <Navbar.Text>
                                {
                                    user?.email && <span id="dis-name">{user?.displayName}</span>

                                }
                            </Navbar.Text>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        </div>
    );
};

export default Header;