import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import logo from "/jakarta-tourism.svg";

const NavigationBar = () => {
  return (
    <div>
      <Navbar sticky="top" expand="lg">
        <Container fluid className="px-5">
          <Navbar.Brand href="/">
            <img alt="Logo" src={logo} width="auto" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Offcanvas
            id="offcanvas-navbar"
            aria-labelledby="offcanvas-navbar-label"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvas-navbar-label">
                <h2 style={{ fontWeight: "bold" }}>
                  <span>Jakarta Tourism </span>
                  <br />
                  <span>Map</span>
                </h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="ms-auto fw-semibold"
                style={{ fontSize: "calc(12px + 0.390625vw)" }}
              >
                <Nav.Link href="/jakspace-webgis">Home</Nav.Link>
                <Nav.Link href="/jakspace-webgis/#/direction-map">Map</Nav.Link>
                <Nav.Link href="/jakspace-webgis/#/storytelling">
                  Storytelling
                </Nav.Link>
                <Nav.Link href="/jakspace-webgis/#/about">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
