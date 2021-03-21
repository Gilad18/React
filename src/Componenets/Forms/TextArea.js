import React, { Component } from 'react'

export class TextArea extends Component {
    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                <br></br>
                <textarea rows="4" cols="50" alt={this.props.alt} onChange={this.props.onChange}>
                </textarea>
            </div>
        )
    }
}

export default TextArea
