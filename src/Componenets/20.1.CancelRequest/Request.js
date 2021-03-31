
import React, { useState } from 'react'
import Fetch from './Fetch'

export default function Request() {

     const [show , setShow] = useState(false)

     const toggleDisplay = () => {
        setShow(!show)
     }

    return (
        <div style={{width:'50vw' , textAlign:'center' }}>
            <input type="button" value="Toggle" onClick={toggleDisplay}></input>
            {show && <Fetch/>}
        </div>
    )
}
