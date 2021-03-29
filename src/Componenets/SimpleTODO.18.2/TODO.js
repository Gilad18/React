import React, {useState} from 'react'
import MyDATA from './MyData';


function MyToDO() {

const [Data  , setData] = useState(MyDATA);
 
const handleCLick = (index) => {
    let newData = [...Data]
    newData[index].completed  = !newData[index].completed;
    setData(newData)
}


  return (
      <div>
          {Data.map( ( item, index) => {
              return <div key={index} style={{display:'flex'}}>
                   <h2 style={{
                            textDecoration: item.completed ? "line-through" : "none"
                        }} >{item.name}</h2>
                   <button  onClick={() => handleCLick(index)}>{item.completed ? 'Mark as Undone' : 'Mark as Done'}</button>
                    </div>
            })}
      </div>
  )
} 

export default MyToDO
