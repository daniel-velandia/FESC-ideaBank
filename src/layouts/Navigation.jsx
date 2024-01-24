import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../connections/userActions';
import { Container, Nav, Button, SplitButton } from 'react-bootstrap';

function Navigation() {
    const connected = useSelector((state) => state.connected);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const circuloEstilo = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff", // Puedes ajustar el color de fondo según tus preferencias
        color: "#e30513", // Puedes ajustar el color del texto según tus preferencias
        cursor: "pointer",
        fontWeight: "600",
      };
    
      const dropdownEstilo = {
        borderRadius: "50%", // Puedes ajustar el radio de borde según tus preferencias
      };

    return (
    <Container>
                <header>
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="d-flex justify-content-between">
                        <div className="text-center mt-3">
                            <Navbar.Brand as={NavLink} to={"/"} className="text-dark fs-4">FESC IdeaBank</Navbar.Brand>
                        </div>
                            {connected ? (
                                <SplitButton
          title={<div style={circuloEstilo}>{user.sub.substring(0, 2).toUpperCase()}</div>}
          id="split-button-dropdown"
          className='me-0 mt-2'
          style={dropdownEstilo}
          variant="danger"
        >
          <React.Fragment>
            <NavDropdown.Item as={NavLink} to={"/"} className='text-black'>
              Resetear contraseña
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </React.Fragment>
          <NavDropdown.Item onClick={() => dispatch(logout())} className='text-black'>
            Cerrar sesión
          </NavDropdown.Item>
        </SplitButton>                        ): <Button as={NavLink} to={'/login'} variant="danger">Sign in</Button>}
                        </div>
                    </div>
                </header>
                <hr/>
                <div className="nav-scroller py-1 mb-2">
                    <Nav className="nav d-flex justify-content-between">
                        <NavLink className="link p-2 text-decoration-none">World</NavLink>
                        <NavLink className="link p-2 text-decoration-none">U.S.</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Technology</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Design</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Culture</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Business</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Politics</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Opinion</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Science</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Health</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Style</NavLink>
                        <NavLink className="link p-2 text-decoration-none">Travel</NavLink>
                    </Nav>
                </div>
            </Container>

    );
}

export { Navigation }
