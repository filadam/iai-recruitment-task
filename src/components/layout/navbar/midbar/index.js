import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import flagPL from './img/25.jpg'
import flagDE from './img/11.jpg'
import LogoImg from './img/ASSASINARMY_projector_1170px.png'
import bg from './img/bg.png'

const flagStyle = {
    width: 20,
    height: 10,
    margin: 10,
}

class MidBar extends React.Component {
    render() {
        return (
            <div className="container-fluid nav" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container navbar">
                    <img className="navbar__item navbar__logo" src={LogoImg} />
                    <div
                        className="navbar__item inputGroup"
                    >
                        <button style={{ height: 50, width: 50, backgroundColor: "#2e2e2e", border: "none" }}>
                            <FontAwesomeIcon style={{ color: "white" }} className="faIcon" icon={faSearch} />
                        </button>
                        <input
                            style={{ height: 50, width: 250, padding: 10, }}
                            placeholder="Wpisz czego szukasz..."
                        />
                    </div>
                    <Dropdown className="navbar__item">
                        <Dropdown.Toggle style={{ backgroundColor: "transparent", fontWeight: "bold", color: "black", border: "none" }} id="dropdown-basic">
                            PL <img style={flagStyle} src={flagPL} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">PL<img style={flagStyle} src={flagPL} /></Dropdown.Item>
                            <Dropdown.Item href="#/action-2">DE<img style={flagStyle} src={flagDE} /></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <a href="#">TWOJE KONTO</a>
                </div>
            </div>
        )
    }
}

export default MidBar