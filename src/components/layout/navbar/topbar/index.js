import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery'

const iconStyles = {
    color: "#da2128"
}

class TopBar extends React.Component {

    render() {

        return (
            <div
                className="topBar"
                onMouseOver={() => {
                    $(".faIcon").addClass("animeTopBar")
                }}
                onMouseLeave={() => {
                    $(".animeTopBar").removeClass("animeTopBar")
                }}
            >
                <div className="container topBar--contents">
                    <p>
                        <FontAwesomeIcon
                            style={iconStyles}
                            className="faIcon"
                            icon={faPhoneVolume}
                        />
                        123 456 789
                        </p>
                    <p>
                        <FontAwesomeIcon
                            style={iconStyles}
                            className="faIcon"
                            icon={faEnvelope}
                        />
                        sklep@assassinscreed.pl
                        </p>
                    <p>
                        <FontAwesomeIcon
                            style={iconStyles}
                            className="faIcon"
                            icon={faFacebookF}
                        />
                        asassinar
                        </p>

                </div>

            </div>
        )
    }
}

export default TopBar;