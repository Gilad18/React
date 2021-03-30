import React from 'react'

export default function CardAvatar({name , phone, pic}) {
    return (
        <div className="cardAvatar">
        <h3>Name: {name}</h3>
        <h4>Phone: {phone}</h4>
        <div className="pic" style={{backgroundImage:`url(${pic})`}}></div>
    </div>
    )
}
