import React, { Component } from 'react'

export class Copy extends Component {
    constructor(props) {
        super();

        this.state = {
            text : ''
        }


    }

    updateText = (e) => {
     this.setState({text : e.target.value})
    }
    render() {
        return (
            <div>
               <label>WHat the meaning of life?</label>
               <br></br>
               <textarea rows="4" cols="50" value={this.state.text} onChange={this.updateText}/>
               <button>Copy</button>
            </div>
        )
    }
}

export default Copy
