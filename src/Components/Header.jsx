import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About Me</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/portfolio">
            <Nav.Link>Portfolio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/skills">
            <Nav.Link>Skills</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume">
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
