import React from 'react'
import axios from 'axios';
import Button from './button';
import Search from './Search';
import Text from './theJoke'

 class Chuk extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             joke : [],
             categories : [],
             currentCategory : '',
             freeText: ''
         }
     }
      componentDidMount = async ()=> {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/categories');
            this.setState({categories:response.data})
           
          } catch (error) {
            console.error(error);
          }
     }

     updateTheJoke = (item) => {
         this.setState({joke : []})
        const myArry = this.state.joke
        if(item.length>1){
            myArry.push(...item)
        }else {myArry.push(item)}
        this.setState({joke:myArry})
        console.log(this.state.joke)
     }

      getJoke = async ()=> {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            this.updateTheJoke(response.data);
           
          } catch (error) {
            console.error(error);
          }
    }

    getbyCat = async ()=> {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${this.state.currentCategory}`);
            let theJoke =  response.data;
            this.updateTheJoke(response.data);
            // this.setState({joke:theJoke})
           
          } catch (error) {
            console.error(error);
          }

    }

    getSelectedCat = (e) => {
     this.setState({currentCategory:e.target.value})
    }

    freeText = (e) => {
       let myFreeText = e.target.value
       if (myFreeText.length>=3) {
           this.setState({freeText : myFreeText})
       }
    }

    getJokeByFreeText = async () => {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${this.state.freeText}`);
            let jokeList = response.data.result
            console.log(jokeList)
            this.updateTheJoke(jokeList)
           
          } catch (error) {
            console.error(error);
          }
    }
    render() {
        return (
            <div>
                <Button name="Get Random Joke" onClick={this.getJoke}/>
                <br></br>
                <select onChange={this.getSelectedCat}>
                    {this.state.categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <Button name="Get by Category" onClick={this.getbyCat}/>
                <br></br>
                <Search onChange={this.freeText}/>
                <Button name="Get Joke" onClick={this.getJokeByFreeText}/>
                <br></br>
                <div>
                {this.state.joke.map(item => {
                   return <Text key={item.id} text={item.value}/>
                })}
                </div>
              
                {/* <Text text={this.state.joke}/> */}
                 
            </div>
        )
    }
}


export default  Chuk