import React, { Component } from 'react'

class FavColor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favoriteColor: "blue"
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: "red" })
        }, 1000)
    }

    componentDidUpdate() {
        document.querySelector("#mydiv").innerHTML = `The updaed color is ${this.state.favoriteColor}`

    }
    render() {
        return (
            <div>
                <h1 style={{ color: this.state.favoriteColor }}>{this.state.favoriteColor} </h1>
                <div id="mydiv"></div>
            </div>
        )
    }
}

export default FavColor