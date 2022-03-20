import React from 'react';
import { Badge, Container, FormControl, Nav, Navbar , Dropdown} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark' style={{ height:80 }} >
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='TopHeadLink' >Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                    className='m-auto'
                    style={{ width:500 }}
                    placeholder='Search a product'
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color='white' fontSize='25px' />
                            <Badge bg="inherit">{10}</Badge>
                        </Dropdown.Toggle >
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding:10 }}>Cart is empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;