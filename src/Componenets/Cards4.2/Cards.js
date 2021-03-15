import { lorem } from 'faker';
import React, { Component } from 'react'
import './Cards.css'

class Cards extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="card">
                <img className="img" src={this.props.src} />
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
                <a href={this.props.urls}>Share</a>
                <a href={this.props.urls}>Explore</a>
            </div>
        )
    }
}

export default Cards
