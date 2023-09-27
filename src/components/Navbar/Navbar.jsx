import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router'

const NavBar =() => {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar href="#home">Navbar</Navbar>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to= "/contact">Contact</Link>
          </Nav>
        </Container>
      <CartWidget />
    </Navbar>
  
  )
}


export default NavBar;