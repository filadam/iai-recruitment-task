import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductPage from './components/products/productpage';
import Footer from './components/layout/footer/index'
import NavBar from './components/layout/navbar/index'


ReactDOM.render(
    <>
        <NavBar />
        <Router>

            <Route exact path='/' component={App} />
            <Route exact path='/products/testproduct' component={ProductPage} />

        </Router >
        <Footer />
    </>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
