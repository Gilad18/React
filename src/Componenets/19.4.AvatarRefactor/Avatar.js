import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './CardAvatar'
import Input from './Input'
import './avatarRefacor.css'

export default function Avatar() {

    const [people, setPeople] = useState([])
    const [Value, setValue] = useState('')

    useEffect(() => {
        const search = async () => {
            const response = await axios.get('https://randomuser.me/api/?results=100');
            setPeople(response.data.results)
        }
        search();
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <Input value={Value} onChange={handleChange}/>
            <div className="grid"> 
                {
                    people.filter(person => {
                        return person.name.first.toLowerCase().includes(Value.toLowerCase())
                    })
                    .map((person, index) => {
                        return <Card key={index} phone={person.cell} name={person.name.first} pic={person.picture.medium} />
                    })
                }

            </div>
        </div>
    )
}
