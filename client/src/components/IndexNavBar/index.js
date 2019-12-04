// import react and required components

import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import GoogleButton from "../GoogleButton";

import Logo from "../Logo";

import logoImage from "../../images.json";


// navbar component for index page with the google sign in button

function IndexNavBar () {
    
  return (
  
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Logo image={logoImage[0].image} name={logoImage[0].name} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-5">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Pesa</Nav.Link>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Manage Accounts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Favorites</NavDropdown.Item>
          <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <GoogleButton />
      </Navbar.Collapse>
    </Navbar>
  );
}


export default IndexNavBar;