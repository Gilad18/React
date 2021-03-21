import React from 'react'

 class button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default button