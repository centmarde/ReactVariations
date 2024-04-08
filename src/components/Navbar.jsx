import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";


function ColorSchemesExample() {
  return (
    <>
      
      <Navbar id='navbar' className='mx-3' bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-center" >
          <Nav>
              <Nav.Link id='h1' className='mx-3' href="/home" >Home</Nav.Link>
            <Nav.Link  id='h1' className='mx-3' href="/About" >About</Nav.Link>
            <Nav.Link  id='h1' className='mx-3' href="/features">Projects</Nav.Link>
            <Nav.Link  id='h1' className='mx-2' href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}


export default ColorSchemesExample;