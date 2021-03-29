import React, { Component } from 'react'
import Store from '../Store'
import {Link} from 'react-router-dom'

 class Products extends Component {
    constructor(props){
        super()

        this.state = {
            store : []
        }
    }

    componentDidMount = () => {
        this.setState({store : Store})
    }
    render() {
        return (
            <div className="product">
               {this.state.store.map(item =>{
                   return <Link key={item.id} to={`/products/product/${item.id}`} >{item.title}</Link>
               } )}
            </div>
        )
    }
}

export default Products
