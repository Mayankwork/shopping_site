import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeQuery } from '../utils/appSlice';

function Header() {
    const cart = useSelector((store) => store.app.cart);
    const search = useSelector((store) => store.app);
    const dispatch = useDispatch();
    function inputChange(e) {
        let query = e.target.value
    
        let newarr = [];
         newarr = search.allitems.filter((ele) => {
          if (query.length==0) {
            return true;
          }
          return ele.title.includes(query) || ele.description.includes(query);
        });

        dispatch(changeQuery(newarr));
      }
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">Shopping Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <Form className="d-flex mt-2 ">
            <FormControl type="text"  onChange={(e) => inputChange(e)} style={{width:'22rem'}}  placeholder="Search" className="me-2 "  />
            
          </Form>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <div className="d-flex align-items-center">
            <Nav.Link href="#">My Cart</Nav.Link>
              <FaShoppingCart size={20} className="me-2" />
              <Badge bg="secondary">{cart.length}</Badge>
            </div>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;