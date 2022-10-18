import React from "react";
import { Link } from "react-router-dom";
import Photo from "../images/amar.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Navigation = () => {
  return (
    <>
      <div className="container">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand>
              <Link className="navbar-brand" to="/">
                <p className="h4">
                  {/* <img
                    src={Photo}
                    alt="amar tauqeer picture"
                    width="40"
                    height="40"
                    className="rounded-circle me-3"
                  /> */}
                  Portfolio
                </p>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="nav-link" to="/publication">
                  Publication
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
