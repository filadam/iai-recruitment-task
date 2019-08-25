import React from 'react'
import './style.css'
import footerBg from './img/footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const iconStyles = {
    color: "#da2128",
    marginRight: 30
}

class Footer extends React.Component {

    render() {
        return (
            <div className="footerBg">


                <div
                    className="footer__container"
                >
                    <div
                        className="container"
                        style={{
                            backgroundImage: { footerBg }
                        }}
                    >
                        <div className="row">
                            <div className="col-sm">
                                <div className="content__container">
                                    <p
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        INFORMACJE
                                        <a href="#home">Informacje o sklepie</a>
                                        <a href="#home">Wysyłka</a>
                                        <a href="#home">Regulamin</a>
                                        <a href="#home">Polityka prywatności</a>
                                        <a href="#home">Odstąpienie od umowy</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="content__container">
                                    <p
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        MOJE KONTO
                                        <a href="#home">Zarejestruj się</a>
                                        <a href="#home">Moje zamówienia</a>
                                        <a href="#home">Koszyk</a>
                                        <a href="#home">Ulubione</a>
                                        <a href="#home">Historia Transakcji</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="content__container">
                                    <span>
                                        KONTAKT
                                        <p style={{ fontSize: "22px", }}>+48 574 046 421</p>
                                        <p style={{ fontSize: "22px", marginTop: "-15px", }}>kontakt@assassinarmy.pl</p>
                                        <FontAwesomeIcon style={iconStyles} className="faIcon fa-2x" icon={faFacebookF} />
                                        <FontAwesomeIcon style={iconStyles} className="faIcon fa-2x" icon={faInstagram} />
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="content__container">
                                    <p
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        MOJE ZAMÓWIENIA
                                        <a href="#home">Sprawdź status zamówienia</a>
                                        <a href="#home">Śledź przesyłkę</a>
                                        <a href="#home">Reklamacje</a>
                                        <a href="#home">Zwroty</a>
                                        <a href="#home">Informacje o wymianie</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerl d-block d-sm-block d-xl-none">

                </div>
            </div>
        )
    }
}


export default Footer;