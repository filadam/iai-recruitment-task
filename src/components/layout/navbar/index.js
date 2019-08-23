import React from 'react';
import './style.css'
import TopBar from './topbar/index'
import MidBar from './midbar/index'
import Basket from './basket/index'

class NavBar extends React.Component {
    render() {
        return (
            <>
                <Basket />
                <TopBar />
                <MidBar />
            </>
        )
    }
}

export default NavBar;