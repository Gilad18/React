import React, { Component } from 'react'

class AnimateBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            background: 'red',
            border : '',
        }
    }

    componentDidMount() {

        console.log(!this.state.isSqaure);

        const colors = ['red', 'yellow', 'blue', 'purple', 'green']
        let index = -1;

        setInterval(() => {
            if (index < 4) { 
               this.setState({ background: colors[index] , border: '' })
               index++
                
            } else  {
               this.setState({background: colors[index] ,border : '50%' , isSqaure: false })
                index=0
            }
        }, 500);
    }
    render() {
        return (
            <div>
                <div className="myBoxDiv" style={{ backgroundColor: this.state.background , borderRadius:this.state.border }}></div>
            </div>
        )
    }
}


export default AnimateBox