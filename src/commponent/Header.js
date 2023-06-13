import React from 'react'
 
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link } from "react-router-dom"
 
function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
       <Link  to="/"Link >
        <Navbar.Brand>dream</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link  to="/">
            <Nav.Link  ><i className="fas fa-home"></i>Home</Nav.Link>
            </Link>
           <Link  to="/cart">
            <Nav.Link ><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            </Link>
            <Link  to="/login">
            <Nav.Link ><i className="fas fa-user"></i>login</Nav.Link>
            </Link>
          </Nav>
          
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default Header
