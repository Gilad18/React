import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Countries() {

    const [ term , setTerm] = useState([])
    const [Value , setValue] = useState('')

    useEffect(() => {
        const search = async () => {
            const data = await axios.get('https://restcountries.eu/rest/v2/all')
            setTerm(data.data);
        };
        search();
    },[])


    const handleCHnage = (e)=> {
        setValue(e.target.value)
    }

    return (
        <div>
            <label>Search:</label>
            <input type="text" value={Value} onChange={handleCHnage}></input>
           <ul>
               {
                   term.filter(item => {
                    return item.name.toLowerCase().includes(Value.toLowerCase())
                   }).map((item , index) => {
                       return <li key={index}>{item.name}</li>
                   })
               }
           </ul>
        </div>
    )
}
