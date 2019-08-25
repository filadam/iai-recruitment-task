import React from 'react';
import './style.css'
import Card from 'react-bootstrap/Card'
import imgo from './img/1.jpg'
import imgt from './img/2.jpg'
import imgth from './img/3.jpg'

function Articles() {
    return (
        <div className="container-full articles__section--wrapper">
            <Card className="bg-dark text-white" data-aos="fade-up">
                <Card.Img src={imgo} alt="Card image" />
                <Card.ImgOverlay className="container">
                    <Card.Title>Artykuł 1</Card.Title>
                    <Card.Text >
                    Duis posuere pretium dictum. Integer ut porta massa.
    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white" data-aos="fade-up">
                <Card.Img src={imgt} alt="Card image" />
                <Card.ImgOverlay className="container">
                    <Card.Title>Artykuł 2</Card.Title>
                    <Card.Text>
                    Donec magna sem, suscipit nec fringilla quis, ultrices ac sapien. Vivamus porttitor odio sit amet posuere commodo. Maecenas quis magna dapibus, maximus eros eu, feugiat mi.
    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white" data-aos="fade-up">
                <Card.Img src={imgth} alt="Card image" />
                <Card.ImgOverlay className="container">
                    <Card.Title>Artykuł 3</Card.Title>
                    <Card.Text>
                    Vestibulum consectetur neque nisl, ut malesuada lectus vestibulum non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}


export default Articles;