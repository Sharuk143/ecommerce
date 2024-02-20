import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../StyleSheets/StyleSheet.css"
import { CiShoppingCart } from "react-icons/ci";
import {  CartCounter } from './NavigationStack';

const HeaderScreen = () => {

    const  { cartCount }=useContext(CartCounter)
    
    return (
        <>

            <Navbar expand="lg" bg="dark">
            <Container fluid>
                {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    {/* <Link to="/home" className='linkStyle Nav'>Home</Link>
                    <Link to="/about" className='linkStyle Nav'>About</Link>
                    <Link to="/blog" className='linkStyle Nav'>Blog</Link> */}

                    <Button className='mx-3  botn'><Link to="/" className='linkStyle'>Home</Link></Button>
                    <Button className='mx-3 botn'> <Link to="/about" className='linkStyle'>About</Link></Button>
                    <Button className='mx-3 botn'><Link to="/blog" className='linkStyle'>Blog</Link></Button>

                    
                </Nav>
                <div>
                    <Button className='mx-3 botn'><Link to="/addtocart" className='linkStyle'><CiShoppingCart style={{fontSize:"25px"}}/> { cartCount }</Link></Button>   
                </div>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>


        </>
    )
}

export default HeaderScreen