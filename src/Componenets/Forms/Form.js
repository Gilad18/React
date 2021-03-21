import React, { Component } from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'

export class Form extends Component {
    constructor(props) {
        super();

        this.state = {
            first : '',
            last : '',
            age : null,
            freeText : '',
            stage : 1
        }
    }

    updtaeDetails = (e) => {
      let theChar= e.target.value;
      let myState;
      if(e.target.alt){
          myState = e.target.alt
      }else {myState = 'freeText'}
      this.setState({
          ...this.state,
          [myState] : theChar
      })
    
    }

    continueToSend = () => {
        this.setState({stage : 2})
    }

    cancelConfirm = () => {
        this.setState({stage : 1})
    }

    confirmSend = () => {
        this.setState({stage : 3})
    }

    render() {
        if(this.state.stage === 1) {
            return (
                <div>
                    <form onSubmit={this.continueToSend}> 
                    <Input value={this.state.first} alt="first" name="First Name:" type="text" onChange={this.updtaeDetails}/> <br></br>
                    <Input  value={this.state.last} alt="last" name="Last Name:" type="text" onChange={this.updtaeDetails}/> <br></br>
                    <Input  value={this.state.age} alt="age"name="Age:" type="number" onChange={this.updtaeDetails}/>  <br></br>
                    <TextArea name="Free Text:" value={this.state.freeText} alt="freeText" onChange={this.updtaeDetails}/> <br></br>
                    <Input type="submit"/>
                    </form>
                </div>
            )
        }
        else if(this.state.stage ===2) {
            return(
                <div>
                    <h3>Please Review Before Confirmation:</h3>
                    <p>First Name: {this.state.first}</p>
                    <p>Last Name: {this.state.last}</p>
                    <p>Age : {this.state.age}</p>
                    <p>{this.state.freeText}</p>
                    <Button name="Cancel" onClick={this.cancelConfirm}/>
                    <Button name="Confirm" onClick={this.confirmSend}/>
                </div>
            )
        }
        else if (this.state.stage ===3 ) {
            return(
                <div>
                    <h2>Your form was sent successfuly!</h2>
                    <h2>Thank you!</h2>
                </div>
            )
        }
       
    }
}

export default Form
