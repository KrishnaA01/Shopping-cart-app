import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark' style={{ height:80 }} >
            <Container>
                <Navbar.Brand>
                    <Nav.Link className='TopHeadLink' href='/'>Shopping Cart</Nav.Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;