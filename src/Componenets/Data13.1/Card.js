import React from 'react'

export class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.name}</h1>
                <h2>{this.props.birthday}</h2>
                <p>Favourite Meats :</p>
                {this.props.food.meats.map(food => {
                    return <p>{food}</p>
                })}
                <p>Favourite fish :</p>
                {this.props.food.fish.map(food => {
                    return <p>{food}</p>
                })}
            </div>
        )
    }
}

export default Card
