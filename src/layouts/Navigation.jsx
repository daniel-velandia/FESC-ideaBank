import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../connections/userActions';
import { Container, Nav, NavDropdown, SplitButton, Image } from 'react-bootstrap';
import { FaUser, FaUserPlus } from "react-icons/fa";
import { HiAnnotation } from 'react-icons/hi'
import logo from '../img/logo-nav.png';
import { useEffect } from "react";

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
        backgroundColor: "#fff",
        color: "#e30513",
        cursor: "pointer",
        fontWeight: '600',
    };
    
    const dropdownEstilo = {
        borderRadius: "50%",
    };

    useEffect(() => {
        const links = document.querySelectorAll('.link');
    
        const handleLinkClick = (event) => {
            links.forEach(link => link.classList.remove('active'));
            event.currentTarget.classList.add('active');
        };
    
        links.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });
    
        return () => {
            links.forEach(link => {
            link.removeEventListener('click', handleLinkClick);
          });
        };
    }, []);

    return (
        <Container>
            <header className="py-1">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="d-flex justify-content-between">
                        <Navbar.Brand as={NavLink} to={"/"} 
                        className="animate__animated animate__tada text-dark animate__slower 3s animate__delay-1s animate__infinite fs-4 mt-3">
                            <Image src={logo} height={40}/>
                        </Navbar.Brand>
                        {connected ? (
                            <SplitButton
                                title={<div style={circuloEstilo}>{user.sub.substring(0, 2).toUpperCase()}</div>}
                                id="split-button-dropdown"
                                className='me-0 mt-2 ms-2'
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
                            </SplitButton>
                        ) : ""}
                    </div>
                </div>
            </header>
            <hr/>
            <div className="nav-scroller py-1 mb-2">
                <Nav className="nav animate__animated animate__zoomIn animate__slow 1s">
                    <NavLink to={"/user"} className="link p-2 ms-0 mx-3" id="mostrar-usuarios-link">
                        <FaUser className='mx-2' />
                        <span>Usuarios</span>
                    </NavLink>

                    <NavLink to={"/user/create"} className="link p-2 ms-0 mx-3" id="crear-usuario-link">
                        <FaUserPlus className='mx-2' />
                        <span>Crear usuario</span>
                    </NavLink>

                    <NavLink to={"/tableTask/projects"} className="link p-2 ms-0 mx-3" id="crear-proyecto-link">
                        <HiAnnotation className='mx-2' />
                        <span>Proyectos</span>
                    </NavLink>
                </Nav>
            </div>
        </Container>
    );
}

export { Navigation }