import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'

function Cards() {
    return (
        <div className="container cards__wrapper">
            <Card className="card__item">
                <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg" />
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/12/t700_x1_1a4ff28e32ae3e43f42a37ad66746425-680x680.jpg" />
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit ametVestibulum feugiat et ex in vehicula. Nam pulvinar molestie libero, vel accumsan ligula bibendum eget. Nam vulputate mi erat, et blandit lorem facilisis vitae.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://paintballs.pl/wp-content/uploads/2016/11/marker-tippmann-ft-12-rental-680x680.jpg" />
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet et blandit lorem facilisis vitae.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://drgampol.pl/userdata/gfx/f65b077392430c77484b318e993ef933.jpg" />
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;