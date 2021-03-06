import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default Button
