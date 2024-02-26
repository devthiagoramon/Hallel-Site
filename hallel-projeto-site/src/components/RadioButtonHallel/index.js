import React from 'react'
import "./radio-buttons-hallel.css"

const RadioButtonHallel = ({style, text, isSelected, setSelected}) => {
  return (
    <div className='radio-buttons-hallel' style={style}>
        <input type='radio' checked={isSelected} onChange={setSelected}/>
        <label>{text}</label>
    </div>
  )
}

export default RadioButtonHallel
