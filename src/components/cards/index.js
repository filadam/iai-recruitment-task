import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function Cards() {
    return (
        <div>
        <div>
            <h4 className="container sectionTitle"> 
                <FontAwesomeIcon
                    style={{ color: "#da2128", marginTop:"3px", marginRight:10,marginLeft:15 }}
                    className="faIcon"
                    icon={faChevronRight}
                    />
                    NOWOŚCI
            </h4>
        <div className="container cards__wrapper">
            <Card className="card__item">
                <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae.
                    </Card.Text>
                    <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                    <Button className="mt-auto" variant="primary">SPRAWDŹ</Button>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/12/t700_x1_1a4ff28e32ae3e43f42a37ad66746425-680x680.jpg" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit ametVestibulum feugiat et ex in vehicula. Nam pulvinar molestie libero, vel accumsan ligula bibendum eget.
                    </Card.Text>
                    <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                    <Button className="mt-auto" variant="primary">SPRAWDŹ</Button>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/11/marker-tippmann-ft-12-rental-680x680.jpg" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae.
    
                    </Card.Text>
                    <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                    <Button className="mt-auto" variant="primary">SPRAWDŹ</Button>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://drgampol.pl/userdata/gfx/f65b077392430c77484b318e993ef933.jpg" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae.
                    </Card.Text>
                    <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                    <Button className="mt-auto " variant="primary">SPRAWDŹ</Button>
                </Card.Body>
            </Card>
        </div>
        </div>
        <div>
            <h4 className="container sectionTitle"> 
                <FontAwesomeIcon
                    style={{ color: "#da2128", marginTop:"3px", marginRight:10,marginLeft:15 }}
                    className="faIcon"
                    icon={faChevronRight}
                    />
                    WYPRZEDAŻE
            </h4>
        <div className="container cards__wrapper">
            <Card className="card__item">
                <Card.Img src="http://pbs.twimg.com/media/CRGWfruUkAQs34I.jpg:small" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae.
                    </Card.Text>
                    <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                    <Button className="mt-auto" variant="primary">SPRAWDŹ</Button>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://ke.jumia.is/9J-b1RM3LtbCRq0c6xkh1tLUnxM=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/91/419181/5.jpg" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit ametVestibulum feugiat et ex in vehicula. Nam pulvinar molestie libero, vel accumsan ligula bibendum eget.
                    </Card.Text>
                    <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                    <Button className="mt-auto" variant="primary">SPRAWDŹ</Button>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://ug.jumia.is/9h9UvBFxHsI-db5nh_x2Fnc7uRY=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/77/19301/1.jpg" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae.
    
                    </Card.Text>
                    <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                    <Button className="mt-auto" variant="primary">SPRAWDŹ</Button>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://drgampol.pl/userdata/gfx/f65b077392430c77484b318e993ef933.jpg" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae.
                    </Card.Text>
                    <Card.Subtitle className="d-flex">6000 zł</Card.Subtitle>
                    <Button className="mt-auto " variant="primary">SPRAWDŹ</Button>
                </Card.Body>
            </Card>
        </div>
        </div>
        </div>
    )
}

export default Cards;