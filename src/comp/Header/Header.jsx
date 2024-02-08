import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img src={Logo} width="50" height="50" alt="BSL" />
            <div>
              <div className="brand-large">Blizzard</div>
              <div className="brand-small">Snowboarding League</div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <LinkContainer to="/">
                  <Nav.Link className="nav-button">Home</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/teams">
                  <Nav.Link className="nav-button">Teams</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
