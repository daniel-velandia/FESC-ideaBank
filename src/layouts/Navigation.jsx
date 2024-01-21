import React from 'react';
import { Container, Nav, Button } from 'react-bootstrap';

function Navigation() {
    return (
        <Container>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <Button variant="danger">Sign in</Button>
                    </div>
                    <div className="col-4 text-center">
                        <a className="blog-header-logo text-dark fs-4">FESC IdeaBank</a>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a className="text-muted">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mx-3">
                                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                            </svg>
                        </a>
                        <Button variant="danger">Sign up</Button>
                    </div>
                </div>
            </header>
            <hr/>
            <div className="nav-scroller py-1 mb-2">
                <Nav className="nav d-flex justify-content-between">
                    <Nav.Link className="link p-2 text-decoration-none">World</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">U.S.</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Technology</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Design</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Culture</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Business</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Politics</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Opinion</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Science</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Health</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Style</Nav.Link>
                    <Nav.Link className="link p-2 text-decoration-none">Travel</Nav.Link>
                </Nav>
            </div>
        </Container>
    );
}

export { Navigation }