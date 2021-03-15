import Boxes from './Componenets/Boxes3.1/Boxes.js';
import Quiz from './Componenets/Quiz/Quiz.js'
import Buttons from './Componenets/Buttons4.1/Buttons.js'
import Card from './Componenets/Cards4.2/Cards'
import faker from 'faker';
import  './App.css';



function App() {
  return (
    <div>
         {/* <Boxes/> */}
         {/* <Quiz/> */}
         {/* <Buttons name="Important" className="bt1" />
         <Buttons name="Not Important"/> */}
         <Card src={faker.image.image()} name={faker.name.firstName()} desc={faker.lorem.sentence(6)} urls={faker.internet.url()}/>
         <Card src={faker.image.image()} name={faker.name.firstName()} desc={faker.lorem.sentence(6)} urls={faker.internet.url()}/>
         <Card src={faker.image.image()}  name={faker.name.firstName()} desc={faker.lorem.sentence(6)} urls={faker.internet.url()}/>
    </div>
    
  );
}

export default App;