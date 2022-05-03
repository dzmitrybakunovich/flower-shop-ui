import React from "react";

import {
    PermIdentity
} from "@material-ui/icons";

import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/navigationbar.css';

import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand className="header-title">
                <span className="header-title-word">Flower</span>Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navigation">
                    <Nav.Link>
                        <Link className="nav-link" to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="nav-link" to="/flowers">Flowers&Plants</Link>
                    </Nav.Link >
                    <Nav.Link>
                        <Link className="nav-link" to="/sign_in"><PermIdentity/></Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;

