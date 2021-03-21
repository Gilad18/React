import React from 'react'
import axios from 'axios'
import Card from './Card'
import Input from './Input'
import Button from './Button'
import './avatar.css'

let theData;

 class Avatar extends React.Component {
     constructor(props) {
         super(props)

         this.state = {
             avatars : []
         }
     }
       componentDidMount = async () =>{
        try {
          const response = await axios.get('https://randomuser.me/api/?results=15');
           theData = response.data.results;
          this.setState({avatars : theData});
        } catch (error) {
          console.error(error);
        }
      }
      updateStatebyName = (char) => {
          console.log(this.state.avatars)
        let newArr = this.state.avatars.filter(person => {
            return person.name.first.includes(char)
        })
        this.setState({avatars : newArr})
      }

      setSearch = (e) => {
       if(e.target.value.length > 0) {
        this.updateStatebyName(e.target.value)
       }else {this.setState({avatars : theData})}
      }
    render() {
        return (
            <div>
                <Input onChange={this.setSearch}/>
                <Button/>
                <div className="grid">
               {this.state.avatars.map( person => {
               return <Card phone={person.cell} name={person.name.first} pic={person.picture.medium}/>
               })}
               </div>
            </div>
        )
    }
}

export default Avatar
