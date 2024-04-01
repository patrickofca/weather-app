import React from "react";
import { Navbar, Nav, Container, Stack } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {/* <Link to="/contacts" className="nav-link">
              Contacts
            </Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </>
  );
}

export default Home;
