import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

function NavApp() {

  return (
    <div className="NavApp">

      <Navbar bg="dark" variant='dark' expand={false}>
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/" style={{textDecoration:'none', color: '#fff'}}> PetLove</NavLink>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <Nav className="justify-content-end flex-grow-1 pe-3" >
                
                    <Nav.Link >
                    <NavLink className='link-Menu' to='/home'>Home</NavLink> 
                    </Nav.Link>

                    <Nav.Link>
                    <NavLink className='link-Menu' exact to='/all_dogs'>Galeria de Fotos</NavLink> 
                    </Nav.Link>

                    <Nav.Link>
                    <NavLink className='link-Menu' exact to='/breed_dogs'>Cães por Raça</NavLink> 
                    </Nav.Link>
                
                    <Nav.Link>
                    <NavLink className='link-Menu' exact to='/sub_breed' >Cães por Sub Raça</NavLink> 
                    </Nav.Link>
                
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavApp;
