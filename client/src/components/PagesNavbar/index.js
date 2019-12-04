// import react and other required components

import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import LogoutButton from "../LogoutButton";

import Logo from "../Logo";

import logoImage from "../../images.json";


// navbar component search, database and edit pages with sign out button

function PagesNavBar (props) {
    return (
    <Navbar bg="light" expand="lg" className="mb-n4 sticky-top">
        <Logo image={logoImage[0].image} name={logoImage[0].name} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-5">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Pesa</Nav.Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Manage Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Favorites</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            <LogoutButton signOut={props.signOut}/>
        </Navbar.Collapse>
    </Navbar>
)}

export default PagesNavBar;