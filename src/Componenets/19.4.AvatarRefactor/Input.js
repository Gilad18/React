import React from 'react'

export default function Input({value , onChange}) {
    return (
        <div>
            <label style={{color:'white'}}>Search:</label>
            <input className="search" type="text" value={value} onChange={onChange}></input>
        </div>
    )
}
