import React, { Component } from 'react'

export class CheckBox extends Component {
    render() {
        return (
            <div>
                
                <input type="checkbox" checked={this.props.checked}></input>
                <label>{this.props.name}</label>
            </div>
        )
    }
}

export default CheckBox
