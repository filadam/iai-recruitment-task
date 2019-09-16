import React from 'react';
import './style.css'
import { Dropdown } from 'react-bootstrap'
import ProductGallery from './productgallery/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faDollarSign, faTruck, faUndo, faPercent, faAward, faChevronRight, faAlignCenter } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import ButtonBackground from './img/badge.png'
import Baner from './img/baner.png'
class ProductPage extends React.Component {
    state = {
        quantity: 1,
    }

    render() {
        const productList = {
            name: "MARKER TIPPMANN FT- 50  LITE 50 CAL RENTAL (BLACK)  ",
            manufacturer: "Dye",
            id: "6578758769878",
            colors: [
                { variant: 'https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg', key: 1 },
                { variant: 'https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg', key: 2 },
                { variant: 'https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg', key: 3 },
                { variant: 'https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg', key: 4 },
                { variant: 'https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg', key: 5 },
            ],
            barrel: [
                { variant: "120cm", key: 1 },
                { variant: "130cm", key: 2 },
                { variant: "140cm", key: 3 },
                { variant: "240cm", key: 4 },
            ],
            caliber: [
                { variant: "55NU", key: 1 },
                { variant: "65NU", key: 1 },
                { variant: "75NU", key: 1 },
                { variant: "85NU", key: 1 },
            ],
            quantity: "13 SZT.",
            price: "1299,00 zł",

        }

        return (
            <div>
                <div className="container" >
                    <div className="row productInfo">
                        <div className="col">
                            <ProductGallery />
                        </div>
                        <div className="col about__product" style={{}}>
                            <h3>
                                {productList.name}</h3>
                            <p>PRODUCENT: <a href="#">{productList.manufacturer}</a> KOD PRODUKTU: {productList.id}</p>
                            Kolor:
                        <div className="about__product--colors">
                                {productList.colors.map(productList => (
                                    <img key={productList.key} src={productList.variant} alt="" />
                                ))}
                            </div>
                            <div className="row dropdownRow" style={{ marginTop: "20px" }}>
                                <div className="col-sm" >
                                    Długość Lufy
                                <Dropdown>
                                        <Dropdown.Toggle active={false} style={{ marginTop: 10, width: 150, backgroundColor: "transparent", color: "black", border: "solid 1px lightgray" }} id="dropdown-basic">
                                            120CM
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {productList.barrel.map(productList => (
                                                <Dropdown.Item href="#/action-1">{productList.variant}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="col-sm">
                                    Kaliber
                                <Dropdown>
                                        <Dropdown.Toggle style={{ marginTop: 10, width: 150, backgroundColor: "transparent", color: "black", border: "solid 1px lightgray" }} id="dropdown-basic">
                                            55NU
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {productList.caliber.map(productList => (
                                                <Dropdown.Item href="#/action-1">{productList.variant}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                            </div>
                            <div className="row quantityRow" style={{ marginTop: "20px" }}>
                                <div className="col" style={{ display: "flex", }}>
                                    <FontAwesomeIcon style={{ color: "green" }} className="faIcon fa-4x " icon={faCheckSquare} />
                                    <div className="" style={{ flexDirection: "column", marginLeft: 10, fontSize: 10 }}>
                                        <p style={{ marginTop: 10 }}>DOSTĘPNY NA MAGAZYNIE ({productList.quantity})</p>
                                        <p><b>WYSYŁKA DZISIAJ</b></p>
                                    </div>
                                </div>
                                <div className="col" style={{ display: "flex", }}>
                                    <a href="#" style={{ marginTop: 10, fontSize: 10 }}><b>SPRAWDŹ CZASY I KOSZTY WYSYŁKI</b></a>
                                </div>
                            </div>
                            <div className="row priceSection" style={{}}>
                                <div className="col">
                                    <b style={{ fontSize: 26, }}>{productList.price}</b>
                                </div>
                                <div className="col">
                                    <button
                                        style={{
                                            height: 50,
                                            backgroundColor: "transparent",
                                            borderLeft: "solid 1px lightgray",
                                            borderTop: "solid 1px lightgray",
                                            borderBottom: "solid 1px lightgray",
                                            borderRight: "none",
                                        }}
                                        onClick={() => {
                                            this.setState({ quantity: this.state.quantity - 1 })
                                        }}>
                                        -
                                </button>
                                    <button
                                        style={{
                                            height: 50,
                                            backgroundColor: "transparent",
                                            borderLeft: "none",
                                            borderTop: "solid 1px lightgray",
                                            borderBottom: "solid 1px lightgray",
                                            borderRight: "none",
                                        }}
                                    >
                                        {this.state.quantity}
                                    </button>
                                    <button
                                        style={{
                                            height: 50,
                                            backgroundColor: "transparent",
                                            borderLeft: "none",
                                            borderTop: "solid 1px lightgray",
                                            borderBottom: "solid 1px lightgray",
                                            borderRight: "solid 1px lightgray",
                                        }}
                                        onClick={() => {
                                            this.setState({ quantity: this.state.quantity + 1 })
                                        }}>
                                        +
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        style={{
                                            marginLeft: -50,
                                            height: 50,
                                            backgroundColor: "transparent",
                                            border: "none",
                                            backgroundImage: `url(${ButtonBackground})`,
                                            backgroundRepeat: "no-repeat",
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        DODAJ DO KOSZYKA
                                        </button>
                                </div>
                            </div>
                            <div className="row iconSection" style={{ marginTop: 30, }}>

                                <div className="col" style={{ display: "flex", }}>
                                    <FontAwesomeIcon style={{ color: "red" }} className="faIcon fa-3x " icon={faDollarSign} />
                                    <div className="" style={{ flexDirection: "column", marginLeft: 10, fontSize: 10 }}>
                                        <p>ZNALAZŁEŚ TEN PRODUKT TANIEJ?</p>
                                        <p>WYNEGOCJUJ DOBRĄ CENĘ</p>
                                    </div>
                                </div>
                                <div className="col" style={{ display: "flex", }}>
                                    <a href="#" style={{ fontSize: 10 }}>DODAJ DO PORÓWNANIA</a>
                                </div>
                            </div>
                            <div className="row " style={{ marginTop: 30, border: "solid 1px lightgray", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "120px", }}>

                                <div className="col" style={{ display: "flex", }}>

                                    <div className="" style={{ flexDirection: "column", marginLeft: 10, fontSize: 10 }}>
                                        <p><FontAwesomeIcon style={{ color: "red", marginRight: 10 }} className="faIcon fa-2x " icon={faTruck} />ZNALAZŁEŚ TEN PRODUKT TANIEJ?</p>
                                        <p><FontAwesomeIcon style={{ color: "red", marginRight: 10 }} className="faIcon fa-2x " icon={faPercent} />ZNALAZŁEŚ TEN PRODUKT TANIEJ?</p>
                                    </div>
                                </div>
                                <div className="col" style={{ display: "flex", }}>
                                    <div className="" style={{ flexDirection: "column", marginLeft: 10, fontSize: 10 }}>
                                        <p><FontAwesomeIcon style={{ color: "red", marginRight: 10 }} className="faIcon fa-2x " icon={faUndo} />ZNALAZŁEŚ TEN PRODUKT TANIEJ?</p>
                                        <p><FontAwesomeIcon style={{ color: "red", marginRight: 10 }} className="faIcon fa-2x " icon={faAward} />ZNALAZŁEŚ TEN PRODUKT TANIEJ?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="container sectionTitle">
                        <FontAwesomeIcon
                            style={{ color: "#da2128", marginTop: "3px", marginRight: 10, marginLeft: 15 }}
                            className="faIcon"
                            icon={faChevronRight}
                        />
                        DOBIERZ DO KOMPLETU
                    </h4>
                    <div className="container cards__wrapper">
                        <Card className="card__item">
                            <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg" />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card className="card__item">
                            <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/12/t700_x1_1a4ff28e32ae3e43f42a37ad66746425-680x680.jpg" />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card className="card__item">
                            <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/11/marker-tippmann-ft-12-rental-680x680.jpg" />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <Card className="card__item">
                            <Card.Img src="https://drgampol.pl/userdata/gfx/f65b077392430c77484b318e993ef933.jpg" />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="container description">
                    <h4>
                        <FontAwesomeIcon
                            style={{ color: "#da2128", marginTop: "3px", marginRight: 10, marginLeft: 15, }}
                            className="faIcon"
                            icon={faChevronRight}
                        />
                        MARKERY FIRMY TIPPMANN
                    </h4>
                    <div className="row">
                        <div className="col-8">
                            <p >
                                stworzony z myślą o młodszych graczach, poprzez zmiejszenie kalubru do 50Cal.
                                FT-50 Lite wygladem przypomina marker FT-12 , jednak rózni się on trochę od swojego pierwowzoru.
                                Marker jest trochę krótszy, korpus ma bardziej agresywny charakter, średnica zewnętrzna oraz wewnętrzna  lufy jest mniejsza oraz średnica otworu podającego kulki w magazynku grawitacyjnym jest dostosowana do kalubru 50Cal.
                            </p>
                            <li style={{ listStyle: "none", }}>kompaktowy militarny wygląd</li>
                            <li style={{ listStyle: "none", }}>szybkie serwisowanie bez użycia narzędzi</li>
                            <li style={{ listStyle: "none", }}>aluminiowy chwyt i body</li>
                            <li style={{ listStyle: "none", }}>wewnętrzny system gazowy "inline bolt system"</li>
                            <li style={{ listStyle: "none", }}>modułowa konstrukcja</li>
                            <li style={{ listStyle: "none", }}>stałe przyrządy celownicze</li>
                            <li style={{ listStyle: "none", }}>Zestaw zawiera magazynek grawitacyjny oraz barrel bag (osłona lufy)</li>
                            <h5
                                style={{
                                    marginTop: 20,
                                }}
                            >NASI KLIENCI PYTALI O:</h5>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Czy ten pistolet jest idealny do gry w pintballa?
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Zwane popularnie "długimi wiatrówkami" świetnie nadają się do precyzyjnego strzelania na dłuższe dystanse (powyżej 15-20 metrów). Mają większą moc niż wiatrówki pistolety, dłuższą lufę i z tego też względu są zdecydowanie bardziej celne. Wystrzeliwany z nich śrut ma również większe możliwości przebijania celu</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Czy ten model posiada mechanizm spustowy ?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Zwane popularnie "długimi wiatrówkami" świetnie nadają się do precyzyjnego strzelania na dłuższe dystanse (powyżej 15-20 metrów). Mają większą moc niż wiatrówki pistolety, dłuższą lufę i z tego też względu są zdecydowanie bardziej celne. Wystrzeliwany z nich śrut ma również większe możliwości przebijania celu</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Jakie dobrać naboje do tego sprzętu?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Zwane popularnie "długimi wiatrówkami" świetnie nadają się do precyzyjnego strzelania na dłuższe dystanse (powyżej 15-20 metrów). Mają większą moc niż wiatrówki pistolety, dłuższą lufę i z tego też względu są zdecydowanie bardziej celne. Wystrzeliwany z nich śrut ma również większe możliwości przebijania celu</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Nie moge znależć instrukcji, czy mi ją doślecie?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Zwane popularnie "długimi wiatrówkami" świetnie nadają się do precyzyjnego strzelania na dłuższe dystanse (powyżej 15-20 metrów). Mają większą moc niż wiatrówki pistolety, dłuższą lufę i z tego też względu są zdecydowanie bardziej celne. Wystrzeliwany z nich śrut ma również większe możliwości przebijania celu</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <div className="questionSection">
                                <h5
                                    style={{
                                        marginTop: 20,
                                    }}
                                >NIE ZNALAZŁEŚ ODPOWIEDZI?
                                </h5>
                                <button
                                    style={{
                                        border: "none",
                                        color: "white",
                                        fontWeight: "bold",
                                        backgroundImage: `url(${ButtonBackground})`,
                                        backgroundRepeat: "no-repeat",
                                        height: 50,
                                    }}
                                >
                                    ZADAJ PYTANIE
                            </button>
                            </div>
                        </div>
                        <div>
                            <Card
                                style={{
                                    width: 300,
                                    listStyle: "none",

                                }}
                                className="">
                                <Card.Img src={Baner} />
                                <Card.Body className="d-flex ">
                                    <Card.Text style={{
                                        padding: 10,
                                    }}>
                                        <li>Numer Seryjny:</li>
                                        <ul><b>1e54683</b></ul>
                                        <li>Model:</li>
                                        <ul><b>TIPPMANN</b></ul>
                                        <li>Wykończenie:</li>
                                        <ul><b>Czarny</b></ul>
                                        <li>Kaliber:</li>
                                        <ul><b>500mm</b></ul>
                                        <li>Pojemność magazynka:</li>
                                        <ul><b>1000</b></ul>
                                        <li>Mechanizm Spustowy:</li>
                                        <ul><b>SA</b></ul>
                                        <li>Siła nacisku spustu:</li>
                                        <ul><b>1.8kg</b></ul>
                                        <li>Wymiary</li>
                                        <ul><b>1200x123mm</b></ul>
                                    </Card.Text>
                                    <Card.Subtitle className="d-flex">


                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <h4>
                        <FontAwesomeIcon
                            style={{ color: "#da2128", marginTop: "3px", marginRight: 10, marginLeft: 15, marginTop: 30 }}
                            className="faIcon"
                            icon={faChevronRight}
                        />
                        PORADY NASZEGO EKSPERTA
                    </h4>
                    <div
                        className="row tips"
                        style={{
                            marginTop: 30,
                        }}
                    >
                        <div className="col">
                            <h6>JAK TWORZYĆ SAMEMU FARBY DO GRY?</h6>
                            <img
                                style={{
                                    width: 200,
                                    height: 200,
                                    float: "left",
                                }}
                                src="https://cdn.shopify.com/s/files/1/0535/4197/products/INFAMOUS-SILENCIO-TIP-WEBSITE-Product1.jpg?v=1561053581" />
                            <p
                                style={{
                                    // width: 500,
                                    padding: 10,
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut justo eleifend, tempus lorem et, facilisis nisi. Praesent et eros non nisl iaculis ultricies eget nec odio. Fusce nec efficitur elit, non ullamcorper libero. Quisque consequat sapien in lacus condimentum posuere.</p>
                        </div>
                        <div className="col">
                            <h6>JAK TWORZYĆ SAMEMU FARBY DO GRY?</h6>
                            <img
                                style={{
                                    width: 200,
                                    height: 200,
                                    float: "left",
                                }}
                                src="https://cdn.shopify.com/s/files/1/0535/4197/products/INFAMOUS-SILENCIO-TIP-WEBSITE-Product1.jpg?v=1561053581" />
                            <p
                                style={{
                                    // width: 500,
                                    padding: 10,
                                }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut justo eleifend, tempus lorem et, facilisis nisi. Praesent et eros non nisl iaculis ultricies eget nec odio. Fusce nec efficitur elit, non ullamcorper libero. Quisque consequat sapien in lacus condimentum posuere.</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProductPage;