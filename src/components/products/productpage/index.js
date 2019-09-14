import React from 'react';
import './style.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import ProductGallery from './productgallery/index'

class ProductPage extends React.Component {
    render() {

        return (

            <div className="container" >
                <div className="col-6">
                    <ProductGallery />
                </div>
                <div className="col-6">
            
                </div>
            </div>
        )
    }
}

export default ProductPage;