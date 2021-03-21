import React, { Component } from 'react'

export class Input extends Component {
    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                <input type={this.props.type}  alt={this.props.alt} onChange={this.props.onChange}></input>
            </div>
        )
    }
}

export default Input
