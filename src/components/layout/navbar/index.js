import React from 'react';
import './style.css'
import TopBar from './topbar/index'
import MidBar from './midbar/index'
import NavBarLg from './navbarlg/index'
import NavBarSm from './navbarsm/index'
import Basket from './basket/index'

class NavBar extends React.Component {
    render() {
        return (
            <>
                <Basket />
                <TopBar />
                <NavBarLg />
                <NavBarSm />
            </>
        )
    }
}

export default NavBar;