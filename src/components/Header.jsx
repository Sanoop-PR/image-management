import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Image Management</Navbar.Brand>
      <Nav className="me-auto">
        <Link to={'/'}><Nav.Item >Home</Nav.Item></Link>
        <Link to={'/login'}><Nav.Item>Login</Nav.Item></Link>
        <Link to={'/register'}><Nav.Item >Register</Nav.Item></Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header