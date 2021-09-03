import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiBiohazard } from 'react-icons/gi'

function Header() {


  return (
    <Navbar collapseOnSelect expand="lg"  style={{ backgroundColor: '#3eaf76' }}>
      <Container>
        <Navbar.Brand href="/"><GiBiohazard style={{marginBottom: '5px'}} />&nbsp;Covid-19 Tracker</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav as={Link} to="/" style={{color: 'white', textDecoration: 'none'}}>News</Nav>&nbsp;&nbsp;
            <Nav as={Link} to="/map"style={{color: 'white', textDecoration: 'none'}} >Map</Nav>&nbsp;&nbsp;
               <Nav as={Link} to="/statistics" style={{color: 'white', textDecoration: 'none'}} >Statistics</Nav>
          </Nav>
        
         
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
