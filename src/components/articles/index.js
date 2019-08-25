import React from 'react';
import './style.css'
import Card from 'react-bootstrap/Card'
import imgo from './img/1.jpg'
import imgt from './img/2.jpg'
import imgth from './img/3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Articles() {
    return (
        <div className="container-full articles__section--wrapper">
            <Card className="bg-dark text-white" data-aos="fade-up">
                <Card.Img src={imgo} alt="Card image" />
                <Card.ImgOverlay className="container">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text >
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white" data-aos="fade-up">
                <Card.Img src={imgt} alt="Card image" />
                <Card.ImgOverlay className="container">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white" data-aos="fade-up">
                <Card.Img src={imgth} alt="Card image" />
                <Card.ImgOverlay className="container">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}


export default Articles;