import React, { Component } from 'react'

 class Child extends Component {
     state = {
         color : this.props.value
     };

     getColor(e)  {
      this.props.colorChange(e.target.textContent)
     }
    render() {
        return (
            <div>
                <button style={{backgroundColor:this.props.value}} onClick={(e)=>this.getColor(e)}>{this.props.value}</button>
            </div>
        )
    }
}


export default Child