import React from "react";  
import { NavDropdown, Navbar, Nav  } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNav = () => {
  return(
    <React.Fragment>
      <Navbar>
        <Navbar.Brand as={Link} to="/">Matthew Eilar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="homepage">
          <Nav className='me-auto'>
            <Nav.Link href="/bio">Bio</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/other">Other Work</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="mailto:meilar@gmail?subject=Website%20Visitor">Email</NavDropdown.Item>
              <NavDropdown.Item href="https://www.github.com/meilar/">Github</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/matthew-eilar/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://twitter.com/MtthwKrl">Twitter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default TopNav;