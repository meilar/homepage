import React from "react";  
import { NavDropdown, Navbar, Nav  } from "react-bootstrap";

const TopNav = () => {
  return(
    <React.Fragment>
      <Navbar>
        <Navbar.Brand href="#home">Matthew Eilar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="homepage">
          <Nav className='me-auto'>
            <Nav.Link href="#">Bio</Nav.Link>
            <Nav.Link href="#home">Resume</Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#home">Other Work</Nav.Link>
            <NavDropdown title="Social" id="basic-nav-dropdown">
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