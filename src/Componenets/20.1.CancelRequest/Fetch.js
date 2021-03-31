import React, { useState , useEffect} from 'react'
import axios from 'axios'

export default function Fetch() {
    const [data , setData] = useState('')

    useEffect(() => {

        const source = axios.CancelToken.source();

         const search = async () => {
           const theData = await axios.get('https://swapi.dev/api/films/2/', {cancelToken: source.token})
           setData( JSON.stringify(theData))
         };

         search();

         return () => {
            source.cancel()
         }
     
     }, [])

    return (
        <div>
            <p>{data}</p>
        </div>
    )
}
