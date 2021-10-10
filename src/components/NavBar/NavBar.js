import React, {useContext} from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import CountryContext from './../../Context/Country/CountryContext';

const NavBar = () => {

    const { getCountryByRegion } = useContext(CountryContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" 
                variant="dark" >
            <Container >
                <Navbar.Brand href="#">REGIONES</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" action
                        onClick={()=> getCountryByRegion('all')}
                    >All</Nav.Link>
                    <Nav.Link href="#" action
                        onClick={()=> getCountryByRegion('Europe')}
                    >Europa</Nav.Link>
                    <Nav.Link href="#" action
                        onClick={()=> getCountryByRegion('Africa')}
                    >Africa</Nav.Link>
                    <Nav.Link href="#" action
                        onClick={()=> getCountryByRegion('Asia')}
                    >Asia</Nav.Link>
                    <Nav.Link href="#" action
                        onClick={()=> getCountryByRegion('Americas')}
                    >America</Nav.Link>
                    <Nav.Link href="#" action
                        onClick={()=> getCountryByRegion('Oceania')}
                    >Oceania</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



export default NavBar;
