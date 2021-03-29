import React, { useState } from 'react'
import Input from './Input'

const Time = () => {

    const [theSecs , setSecs] = useState(null)

    const handleChange = ( e) => {
       if(isNaN(e.target.value)) {
           console.log('Nay')
       } else {
           console.log('Yes')
         if(e.target.name === 'seconds') {
             setSecs(e.target.value)
         } else if (e.target.name === 'minutes') {
             setSecs(e.target.value*60)
         } else if (e.target.name === 'hours') {
            setSecs(e.target.value*3600)
         }
        }
     }
    return (
        <div style={{display:'flex' , flexDirection:'column' , width:'10vw'}}>

            <Input name="seconds"  value={theSecs /1} onChange={handleChange}/>
            <Input name="minutes"  value={theSecs /60} onChange={handleChange}/>
            <Input name="hours"  value={theSecs /3600} onChange={handleChange}/>
           
        </div>
    )
}

export default Time