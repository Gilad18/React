import React from 'react'

 class theJoke extends React.Component {
    render() {
        console.log(this.props.text)
        return (
            <div>
                <h3>{this.props.text}</h3>
            </div>
        )
    }
}

export default theJoke