import React, { Component } from 'react'

 class Focus extends Component {
     constructor(props) {
         super(props);

         this.textInput = React.createRef();
     }

     componentDidMount() {
       this.textInput.current.focus();
     }
     
    render() {

        return (
            <div>
               <label>Insert:</label>
                <input type="text"  ref={this.textInput} ></input>
                <label>Insert:</label>
                <input type="text"  ></input>
            </div>
        )
    }
}

export default Focus
