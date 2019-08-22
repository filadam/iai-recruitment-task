import React from 'react';
import badge from './img/badge.png'

class Basket extends React.Component {
    render() {
        return (
            <div className="container">
                <div
                    style={{
                        position: "fixed",
                        marginLeft: 1000,
                        zIndex: 9999999,
                        backgroundImage: `url(${badge})`,
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        color: "white",
                        fontWeight: "bold",

                    }}
                    className="navbar__item navbar__badge" src={badge}
                >
                    <p>Twój Koszyk</p>
                    <p>99999999.99 zł</p>
                </div>
            </div>
        )
    }
}

export default Basket;