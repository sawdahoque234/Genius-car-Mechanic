import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const { user, logout } = useAuth();  
    return (
                     <>
<Navbar bg="dark" fixed="top"  variant="dark">
<Container>
<Navbar.Brand href="#home">Geniues Car Services</Navbar.Brand>
<Navbar.Toggle />
<Nav className="ms-auto">

<Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
<Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
<Nav.Link as={HashLink} to="/home#experts" >Experts</Nav.Link>
{user.email ?
<Button onClick={logout} variant="danger"className="mx-3"> Logout</Button> :
<Nav.Link as={HashLink} to="/login">Log in</Nav.Link>
}
      <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Nav>
    </Container>
  </Navbar>
</>
            
    );
};

export default Header;