import { Outlet,Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Layout(){
    return(<>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Assignment 9</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="layout/home">Home</Nav.Link>
            <Nav.Link as={Link} to="layout/about">About</Nav.Link>
            <Nav.Link as={Link} to="layout/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="layout/jobs">Jobs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    <Outlet/>
    
    </>)


}

export default Layout;