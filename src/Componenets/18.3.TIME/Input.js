import React from 'react'

const Input = ({name , value , onChange}) => {
  return (
      <React.Fragment>
          <label>{name}</label>
          <input type="text" name={name} value={value} onChange={onChange}></input>
          </React.Fragment>
  )
}

export default Input