import React, { Component } from 'react'


class BoxAnimation extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            animation: 'none',
            visibililty: 'visible'
         }

    } 

    componentDidMount() {
        setTimeout(() => {
            this.setState({animation: 'slide 4s ease-in'})
        },1000)

        setTimeout(()=> {
            this.setState({visibililty:'hidden'})
        },5000)
    }


    render() {
        return (
            <div>
                <div className="myBox"  style={{visibility:this.state.visibililty , animation:this.state.animation}}></div>
            </div>
        )
    }
}


export default BoxAnimation