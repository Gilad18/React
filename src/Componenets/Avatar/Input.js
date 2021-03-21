import React from 'react'

export class Input extends React.Component {
    render() {
        return (
            <div >
                <label>Search :</label>
                <input type="text" onChange={this.props.onChange}></input>
            </div>
        )
    }
}

export default Input
