import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../connections/userActions";

const Navigation = () => {
  const connected = useSelector((state) => state.connected);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
    <div classname="container">
  <header classname="border-bottom lh-1 py-3">
    <div classname="row flex-nowrap justify-content-between align-items-center">
      <div classname="col-4 pt-1">
        <a classname="link-secondary" href="#">Subscribe</a>
      </div>
      <div classname="col-4 text-center">
        <a classname="blog-header-logo text-body-emphasis text-decoration-none" href="#">Large</a>
      </div>
      <div classname="col-4 d-flex justify-content-end align-items-center">
        <a classname="link-secondary" href="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" classname="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
        </a>
        <a classname="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
  </header>

  <div classname="nav-scroller py-1 mb-3 border-bottom">
    <nav classname="nav nav-underline justify-content-between">
      <a classname="nav-item nav-link link-body-emphasis active" href="#">World</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">U.S.</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Technology</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Design</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Culture</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Business</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Politics</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Opinion</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Science</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Health</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Style</a>
      <a classname="nav-item nav-link link-body-emphasis" href="#">Travel</a>
    </nav>
  </div>
</div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          FESC-ideaBank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classnameName="me-auto">
            {connected && (
              <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                <NavDropdown.Item href="/registerInternalUser">
                  Registrar Usuarios
                </NavDropdown.Item>
                <NavDropdown.Item href="/ViewUsers">
                  Observar Usuarios
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            {!connected ? (
              <React.Fragment>
                <Nav.Link as={NavLink} to={"/register"}>
                  Registrarse
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/Login"}>
                  Iniciar sesion
                </Nav.Link>
              </React.Fragment>
            ) : (
              <NavDropdown title={user.sub} id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to={"#"} classnameName="text-black">
                  item
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => dispatch(logout())}>
                  Cerrar sesion
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export { Navigation };
