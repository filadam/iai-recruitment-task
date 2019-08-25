import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import flagPL from './img/25.jpg'
import flagDE from './img/11.jpg'
import LogoImg from './img/ASSASINARMY_projector_1170px.png'
import bg from './img/bg.png'

const flagStyle = {
    width: 20,
    height: 10,
    margin: 10,
}
const flag = {
    background: `url(${flagPL})`
}

class NavBarSm extends React.Component {
    render() {
        return (
            <div>
                {/* small menu */}
                <Navbar className="navbarsm d-block d-sm-block d-md-none" collapseOnSelect expand="md" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="container wrapper">
                        <Navbar.Brand href="#home">
                            <img className="navbar__item navbar__logo" src={LogoImg} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features">
                                    <div
                                        className="navbar__item inputGroup"
                                    >
                                        <button
                                            style={{ height: 50, width: 50, backgroundColor: "#2e2e2e", border: "none" }}
                                        >
                                            <FontAwesomeIcon
                                                style={{ color: "white" }}
                                                className="faIcon"
                                                icon={faSearch}
                                            />
                                        </button>
                                        <input
                                            style={{ height: 50, width: 250, padding: 10, }}
                                            placeholder="Wpisz czego szukasz..."
                                        />
                                    </div>
                                </Nav.Link>
                                <NavDropdown title="PL" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#/action-1">PL<img style={flagStyle} src={flagPL} /></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#/action-2">DE<img style={flagStyle} src={flagDE} /></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="GOTOWE ZESTAWY DO GRY" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#/action-1">ZESTAWY X</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#/action-2">ZESTAWY Y</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="SPRZĘT" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#/action-1">SPRZĘT X</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#/action-2">SPRZĘT Y</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="ODZIEŻ" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#/action-1">ODZIEŻ X</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#/action-2">ODZIEŻ Y</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">KULKI</Nav.Link>
                                <Nav.Link href="#">WYPRZEDAŻE</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>

        )
    }
}

export default NavBarSm