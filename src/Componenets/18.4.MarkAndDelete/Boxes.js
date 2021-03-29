import React, { useState } from 'react'

const data = ["one", "two", "three", "four", "five"];


function Boxes() {
    const [TheBoxes , setBoxes] = useState(data);

    const[Checked , setChecked] = useState([]);

    const handleCLick = (e) => {
      let checking = Checked
      let index = checking.indexOf(e.target.value)
      if(index === -1) {
        checking.push(e.target.value)
      }
      else{ 
         checking.splice(index , 1)
        }
      setChecked(checking);    
    }

    const deleteCheck = () => {
        let myArr = TheBoxes;
        let filtered = Checked
        let requested = myArr.filter(item => {
            return filtered.indexOf(item) === -1
        }    
        )
        setBoxes(requested)
    }

    const resetList = () => {
        setBoxes(data);
        setChecked([]);
    }

    return (
        <div >
           {TheBoxes.map((item , index) => {
                     
             return  <React.Fragment key={index}>
               <label>{item}</label>
             <input name={item} value={item} type="checkbox" onClick={handleCLick} checked={item.checked}></input>
             </React.Fragment>
           })}
           <br></br>
           <button onClick={deleteCheck}>Delete</button>
           <button onClick={resetList} >Reset</button>
        </div>
    )
}

export default Boxes
