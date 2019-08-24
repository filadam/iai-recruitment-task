import React from 'react';
import './style.css'

function Articles() {
    return (
        <div className="container aboutme__section--wrapper">
            <div className="row">
                <div className="col-sm aboutme__bigimg">
                    <img src="http://www.kajtur.pl/wp-content/uploads/2014/01/image_d-234.jpg" />
                </div>
                <div className="col-l aboutme__container">
                    <div className="aboutme__item">
                        <div className="item__thumb">
                            <img src="http://www.weglomix.pl/bmz_cache/c/Odkryty%20Paintball%20Airsoft%20Polowanie%20Netto%20Okulary%20Gogle%20Taktyczne%20Ochrona%20Oczu%20Okulary%20Okulary%20Turystyka%20Okulary%20Sportowe%20Siatki%20Metalowej%20ali-46917714_4_200x200.jpg" />
                        </div>
                        <div className="item__content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam urna sapien, ultrices et tincidunt a, euismod quis lacus.
                                Nam luctus ullamcorper consectetur.
                            </p>
                        </div>
                    </div>
                    <div className="aboutme__item">
                        <div className="item__thumb">
                            <img src="https://ae01.alicdn.com/kf/HTB1N12SX4_rK1RkHFqDq6yJAFXac/PCP-Paintball-Airsoft-Tank-High-Pressure-Carbon-Fiber-Cylinders-M18-Bottle-0-35L-0-5L-4500psi.jpg_200x200.jpg" />
                        </div>
                        <div className="item__content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam urna sapien, ultrices et tincidunt a, euismod quis lacus.
                                Nam luctus ullamcorper consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Articles;