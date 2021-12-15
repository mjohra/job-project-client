import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import './Header.css';


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="pt-0 mb-5"
        variant="light"
        fixed="top"
        collapseOnSelect
        expand="lg"
      >
        <Container fluid className="nav-detail">
          <Navbar.Brand href="#home">
            <h3 className="title title-logo px-1">M</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {user?.email && (
              <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            )}
          

            {user?.email ? (
              <Button className="me-2 logOut-btn" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              <h5 className="text-black">
                {user?.displayName}
              </h5>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;