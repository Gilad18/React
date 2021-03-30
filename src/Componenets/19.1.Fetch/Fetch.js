import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Fetch() {

    const [term , setTerm] = useState('');

    useEffect(()=> {
        const search = async () => {
            const data = await axios.get('https://swapi.dev/api/films/2/');
            setTerm(data.data)
        };
        search();
    })
    return (
        <div>
           <h1>Movie : {term.title}</h1>
           <h3>Director : {term.director}</h3>
        </div>
    )
}

export default Fetch
