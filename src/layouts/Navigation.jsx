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
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          FESC-ideaBank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
                <NavDropdown.Item as={NavLink} to={"#"} className="text-black">
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
  );
};

export { Navigation };
