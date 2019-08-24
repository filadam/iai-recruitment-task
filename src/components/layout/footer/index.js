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
                                        <p>INFORMACJE</p>
                                        <a href="#">Informacje o sklepie</a>
                                        <a href="#">Wysyłka</a>
                                        <a href="#">Regulamin</a>
                                        <a href="#">Polityka prywatności</a>
                                        <a href="#">Odstąpienie od umowy</a>
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
                                        <p>MOJE KONTO</p>
                                        <a href="#">Zarejestruj się</a>
                                        <a href="#">Moje zamówienia</a>
                                        <a href="#">Koszyk</a>
                                        <a href="#">Ulubione</a>
                                        <a href="#">Historia Transakcji</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="content__container">
                                    <p>
                                        <p>KONTAKT</p>
                                        <p style={{ fontSize: "22px", }}>+48 574 046 421</p>
                                        <p style={{ fontSize: "22px", marginTop: "-15px", }}>kontakt@assassinarmy.pl</p>
                                        <FontAwesomeIcon style={iconStyles} className="faIcon fa-2x" icon={faFacebookF} />
                                        <FontAwesomeIcon style={iconStyles} className="faIcon fa-2x" icon={faInstagram} />
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
                                        <p>MOJE ZAMÓWIENIA</p>
                                        <a href="#">Sprawdź status zamówienia</a>
                                        <a href="#">Śledź przesyłkę</a>
                                        <a href="#">Reklamacje</a>
                                        <a href="#">Zwroty</a>
                                        <a href="#">Informacje o wymianie</a>
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