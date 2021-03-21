import React from 'react'

 class Search extends React.Component {
    render() {
        return (
            <div>
                <label>Free Search: </label>
                <input type="text" onChange={this.props.onChange}></input>
            </div>
        )
    }
}


export default Search