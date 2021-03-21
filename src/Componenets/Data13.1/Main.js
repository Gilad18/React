import React from 'react';
import Data from './Data';
import Name from './Name';
import Card from './Card';
import './card.css'

class Main extends React.Component {
    constructor(props) {
        super()

        this.state = {
                persons : [] ,
                before90 : []
        }
    }

    componentDidMount = () => {
    
     this.setState({persons : Data})
    }

    bornBefore90 = () => {
      let newArr =  this.state.persons.filter(item => {
       return Date.parse(item.birthday) < Date.parse('1-1-1990')
        })
        console.log(newArr)
        this.setState({before90 : newArr})
    }
    render() {
        return (
            <div>
                {this.state.persons.map(item => {
                  return  <p key={item.name}>{item.name}</p>
                })}

                <button onClick={this.bornBefore90}>Get before 90</button>
                <br></br>
                {/* {this.state.before90.map(item => {
                   return <Name key={item.name} name={item.name}/>
                })} */}
                 {this.state.before90.map(item => {
                   return <Card key={item.name} name={item.name} birthday={item.birthday} food={item.favoriteFoods} />
                 })}
            </div>
        )
    }
}

export default Main