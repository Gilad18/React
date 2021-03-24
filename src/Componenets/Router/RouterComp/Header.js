import React, { Component } from 'react'
import {Link} from 'react-router-dom'

 class Header extends Component {
    render() {
        return (
            <div className="navBar">
               <Link to="/">Home</Link>
               <Link to="/products">Products</Link>
            </div>
        )
    }
}

export default Header
