import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Store from '../Store'

export class ProductDetail extends Component {

    render() {
        const { match: { params } } = this.props
        let myArry = Store.filter(item => {
            return item.id === parseInt(params.id) 
        })
        console.log(...myArry);
        return (
            <div>
                <Link to="/products">Back To All Products</Link>
                <div className="prudctDis">
                       <h1>{myArry[0].title}</h1>
                       <div className="itemPic" style={{backgroundImage:`url(${myArry[0].imageUrl})`}}></div>
                       <h3>{myArry[0].size} , ${myArry[0].price}.00</h3>
                </div>
            </div>
        )
    }
}

export default ProductDetail
