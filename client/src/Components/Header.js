import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({user, setUser}) => {
  useEffect(() => {
    if(localStorage.getItem('user') && !user){
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [user]);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">REFSTA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/matches">Fixture</Nav.Link>
            <Nav.Link href="/referees">Stats</Nav.Link>
            <Nav.Link href="/refereeProfile">Referee</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {
          user ?<Button variant='outline-dark' onClick={(e) => {
            localStorage.removeItem("user");
            setUser(null);
          }}>Log Out</Button>:
          <Button variant='outline-dark'>
          <Link to='/signin'>Log In </Link>
          </Button>
          }

      </Container>
    </Navbar>
  );
}

export default Header;