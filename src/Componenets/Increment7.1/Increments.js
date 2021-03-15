import React, { Component } from 'react'

 class Increments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter : 0,                //initilzie in the counstructor scope
        }
    }
        updateLable = () => {  
            console.log(this.state)                                                //method for update the state
            this.setState({counter : this.state.counter+1})
            console.log(this.state)
        } 
    

    render() {                                                                  //calling the method
        return (
            <div>
                <button onClick={this.updateLable} >Increment</button>                  
                <label>{this.state.counter}</label>
            </div>
        )
    }
}

export default Increments
