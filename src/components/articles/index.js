import React from 'react';
import './style.css'

function Articles() {
    return (
        <div className="container aboutme__section--wrapper">
            <div className="row">
                <div className="col-sm aboutme__bigimg">
                    <img src="https://picsum.photos/600/450?grayscale" />
                </div>
                <div className="col-l aboutme__container">
                    <div className="aboutme__item">
                        <div className="item__thumb">
                            <img src="https://picsum.photos/200/200?grayscale" />
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
                            <img src="https://picsum.photos/200/200?grayscale" />
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