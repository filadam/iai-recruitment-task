import React from 'react';
import './style.css'
import TopBar from './topbar/index'
import MidBar from './midbar/index'
import Bucket from './bucket/index'

class NavBar extends React.Component {
    render() {
        return (
            <>
                <Bucket />
                <TopBar />
                <MidBar />
            </>
        )
    }
}

export default NavBar;