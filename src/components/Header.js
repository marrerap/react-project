import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Covid-19 Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav as={Link} to="/" style={{color: 'white', textDecoration: 'none'}}>Home-Page</Nav>&nbsp;
            <Nav as={Link} to="/map"style={{color: 'white', textDecoration: 'none'}} >Map</Nav>&nbsp;
               <Nav as={Link} to="/statistics" style={{color: 'white', textDecoration: 'none'}} >Statistics</Nav>
          </Nav>
        
         
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
