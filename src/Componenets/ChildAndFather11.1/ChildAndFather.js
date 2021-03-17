import React, { Component } from 'react'
import Child from './child'

 class ChildAndFather extends Component {
     constructor(props){
         super()

         this.state = {
              colors: [
                  {color : 'red'},
                  {color : 'green'},
                  {color : 'blue'}
              ],
              currentColor : ''
         }
     }

     onColorChange = (color) => {
        console.log(color)
        this.setState({currentColor:color})
     }

   
    render() {
        return (
            <div>
                {this.state.colors.map(btn => (<Child value={btn.color} colorChange={this.onColorChange}/>))}
                <h1>The color selected is: {this.state.currentColor} </h1>
            </div>
        )
    }
}

export default ChildAndFather