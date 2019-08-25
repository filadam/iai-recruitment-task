import React from 'react';
import badge from './img/badge.png'
import badgebasket from './img/badgebasket.png'
import "./style.css"

class Basket extends React.Component {
    render() {
        return (
            <div className="container  d-none d-md-block">
                <div
                    className="navbar__item navbar__badge"
                    style={{
                        backgroundImage: `url(${badge})`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div
                        style={{
                            width: 185,
                            height: 155,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginTop: 15,

                        }}
                    >
                        <img
                            src={badgebasket}
                            style={{
                                marginRight: 10,
                            }}
                            alt="img"
                        />
                        <a
                            href="#home"
                            style={{
                                fontSize: 10,
                                marginTop: -30,
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Twój Koszyk
                        </a>
                        <a
                            href="#home"
                            style={{
                                marginLeft: -55,
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            3 500zł
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Basket;