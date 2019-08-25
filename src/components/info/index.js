import React from 'react'
import "./style.css"
import AOS from 'aos'
import 'aos/dist/aos.css';


class Info extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 3000
        })
    }
    render() {
        return (
            <div className="infoBg" style={{

            }}>
                <div className="container info__section--wrapper ">
                    <div className="row">
                        <div className="col-l info__container">
                            <div className="info__item">
                                <div className="infoItem item__content"  >
                                    <p>
                                        <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Aliquam urna sapien, ultrices et tincidunt a, euismod quis lacus. Nam luctus ullamcorper consectetur. Proin iaculis semper eros in varius. Proin id enim turpis. Integer tempor, arcu sit amet auctor posuere, tortor urna dictum dui, id ultrices sapien arcu in enim. Suspendisse sit amet magna nulla. Fusce libero diam, lobortis quis ipsum quis, aliquam mollis orci. Praesent in leo volutpat, semper justo vel, ornare arcu.
                                        Donec condimentum lectus eu turpis ornare, eu porttitor libero varius. Etiam bibendum ac nibh vel pharetra. Aliquam mauris ex, gravida ac orci eu, posuere vehicula ex. Nulla rutrum est at ex sagittis, et elementum est semper. Vestibulum laoreet sapien ipsum, vel sodales erat gravida nec. Nulla facilisi. Suspendisse tempor dictum lacus vitae eleifend. Nam fermentum egestas faucibus. Nam sed luctus diam.
                                        Nam id eros ultrices, iaculis nisi id, facilisis ex. Donec at tellus tellus. Integer dignissim, justo sed vestibulum rutrum, libero justo euismod ex, et placerat felis dui dapibus erat. In ut dignissim mi. Aliquam ut odio vitae metus mattis faucibus.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm info__bigimg">
                            <img src="https://i.dlpng.com/static/png/136015_preview.png" />
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}


export default Info;