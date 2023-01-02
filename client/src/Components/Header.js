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


const Header = ({user, setUser}) => {
  useEffect(() => {
    if(localStorage.getItem('user') && !user){
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [user]);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">REFSTA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/UserProfile">Profile</Nav.Link>
            <Nav.Link href="/matches">Fixture</Nav.Link>
            <Nav.Link href="/referees">Stats</Nav.Link>
            <Nav.Link href="/teams">Teams</Nav.Link>
            <Nav.Link href="/standings">Standings</Nav.Link>
            
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