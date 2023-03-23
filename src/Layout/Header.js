import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import '../css/bootstrap.min.css';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Piebin Test Server</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#board">Board</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;