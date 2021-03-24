import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Header from './RouterComp/Header'
import Products from './RouterComp/Products'
import Home from './RouterComp/Home'
import ProductDetail from './RouterComp/ProductDetail'
import './router.css'



 class Router extends Component {
     
    render() {
        return (
            <div>
                <BrowserRouter>
                <div>
                 <Header/>
                 <Route path="/" exact component={Home}/>
                 <Route path="/products" exact component={Products}/>
                 <Route path="/products/product/:id" component={ProductDetail}/>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router
