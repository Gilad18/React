import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Algolia() {

    const [ data  , setData] = useState('react')
    const [results , setResults ] = useState([])
    const [Search , setSearch] = useState('react')
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)

    useEffect(()=> {  
        const search = async () => {
          setError(false)
          setLoading(true)
         await axios.get(`https://hn.algolia.com/api/v1/search?query=${data}`)
          .then( response => {
            console.log(response)
            setResults(response.data.hits)
            setLoading(false)
            
          }).catch((err) => {
              setError(true)
              setResults([])
          })      
        };
        search();
    },[data])

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    const handleClick = () => {
     setData(Search)
    }

    return (
        <div>
            <input type="text" value={Search} onChange={handleChange}></input>
            <input type="button" value="Search" onClick={handleClick}></input>
            {loading && <p style={{fontWeight:'bold'}}>Loading, Please Wait...</p> }
            {error && <p style={{fontWeight:'bold' , color:'red'}}>Sorry :( no results were found, try something else</p>}
           <ul>
            {
                results.map((item , index) => {
                    return  <li key={index}> <a style={{textDecoration:'none'}} href={item.url}>{item.title}</a></li>                
                })
            }
           </ul>
        </div>
    )
}
