import React from 'react'

export class Card extends React.Component {
    render() {
        return (
            <div className="cardAvatar">
                <h3>Name: {this.props.name}</h3>
                <h4>Phone: {this.props.phone}</h4>
                <div className="pic" style={{backgroundImage:`url(${this.props.pic})`}}></div>
            </div>
        )
    }
}

export default Card
