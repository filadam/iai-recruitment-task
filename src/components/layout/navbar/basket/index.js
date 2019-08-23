import React from 'react';
import badge from './img/badge.png'
import badgebasket from './img/badgebasket.png'

class Basket extends React.Component {
    render() {
        return (
            <div className="container">
                <div
                    className="navbar__item navbar__badge" src={badge}
                    style={{
                        position: "fixed",
                        marginLeft: 1000,
                        zIndex: 10,
                        backgroundImage: `url(${badge})`,
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        color: "white",
                        fontWeight: "bold",
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
                        />
                        <a
                            href="#"
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
                            href="#"
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