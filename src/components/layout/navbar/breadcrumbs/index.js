import React from 'react';
import './style.css'
import bg from './img/bg.png';


class Breadcrumbs extends React.Component {
    render() {
        return (
            <div
                className="breadcrumbs"
                style={{
                    height: "50px",
                    color: "black",
                    fontSize: "14px",
                    backgroundImage: `url(${bg})`,

                }}
            >
                <div
                    className="container"
                    style={{
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <b>Strona Główna</b>
                </div>
            </div>
        )
    }
}

export default Breadcrumbs;