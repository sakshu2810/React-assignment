
import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

function Header() {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <span role="img" aria-label="wave" >
            Hello Shahrukh{' '}👋
            </span>
          
          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
            <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="nc-icon nc-zoom-split"></i>
                <span className="d-lg-block">Search</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
