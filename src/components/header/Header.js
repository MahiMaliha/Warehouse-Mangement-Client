import React from 'react';
import { Button, Card, CardGroup, Col, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" className='header' variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src="https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/07/logo_light.svg" className='img-fluid w-75'></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className='me-auto navigation-menu'>
      <Nav.Link as={Link} to="/" className='mx-2 fw-bold text-light'>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='mx-2 fw-bold text-light'>About</Nav.Link>
      <Nav.Link as={Link} to="/inventories" className='mx-2 fw-bold text-light'>Inventories</Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='mx-2 fw-bold text-light'>Blog</Nav.Link>
      <Nav.Link as={Link} to="/reviews" className='mx-2 fw-bold text-light'>Reviews</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='mx-2 fw-bold text-light'>Contact</Nav.Link>
    </Nav>
    <Nav className='text-right'>
      {
        user &&  <Nav.Link as={Link} to="/manageitems" className='mx-2 fw-bold text-light'>ManageItems</Nav.Link>
      }
      {
        user &&  <Nav.Link as={Link} to="/myitem" className='mx-2 fw-bold text-light'>My Item</Nav.Link>
      }

        {
            user ?
            <Nav.Link as={Link} to="">
            
          <Button onClick={handleSignOut} className='btn btn-dark  text-white fw-bold px-4 pe-4'><i class="fa-solid fa-user pe-2"></i>LogOut</Button>
            </Nav.Link>
           
            :
            <Nav.Link as={Link} to="/login">
            <i class="fa-solid fa-user pe-2 text-white"></i><b className='text-white'>Login</b>
            </Nav.Link>
        }  
    </Nav>

    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;