import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import pbsm from './img/pb400x700.jpg'
import pbmd from './img/pb1000x500.jpg'
import pblg from './img/pb1000x300.jpg'


class CarouselA extends React.Component {

    handleSelect = this.handleSelect.bind(this);

    state = {
        index: 0,
        direction: null,
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {

        const e = window.matchMedia("(max-width: 1000px)")
        const f = window.matchMedia("(max-width: 600px)")
        const handleResponsivePhoto = (e) => {
            if (f.matches) {
                return `${pbsm}`
            }
            else if (e.matches) {
                return `${pbmd}`
            }
            else {
                return `${pblg}`
            }
        }
        window.addEventListener('resize', e)


        const { index, direction } = this.state;
        const styledSlider = {
            width: "100%",
            marginTop: 0,
        };
        return (
            <Carousel
                interval={1000}
                controls={true}
                indicators={false}
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item style={styledSlider}>
                    <img
                        src={handleResponsivePhoto(e)}
                        className="d-block w-100 img-fluid"
                    />
                </Carousel.Item>
                <Carousel.Item style={styledSlider}>
                    <img
                        src={handleResponsivePhoto(e)}
                        className="d-block w-100 img-fluid"
                    />
                </Carousel.Item>
                <Carousel.Item style={styledSlider}>
                    <img
                        src={handleResponsivePhoto(e)}
                        className="d-block w-100 img-fluid"
                    />
                </Carousel.Item>
            </Carousel>

        )
    }

}

export default CarouselA;