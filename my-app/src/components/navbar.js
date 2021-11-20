import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav_bar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><img className="logo" src="https://1000marcas.net/wp-content/uploads/2020/02/Logo-Marvel--500x281.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#features">Characters</Nav.Link>
            <Nav.Link className="text-light" href="#pricing">Comics</Nav.Link>
            <Nav.Link className="text-light" href="#pricing">Creators</Nav.Link>
            <Nav.Link className="text-light" href="#pricing">Events</Nav.Link>
            <Nav.Link className="text-light" href="#pricing">Series</Nav.Link>
            <Nav.Link className="text-light" href="#pricing">Stories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}

export default Nav_bar