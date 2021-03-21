import React  from 'react'

export class Name extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Name
