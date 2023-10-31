import React from 'react'
import "./check-box-hallel.css"

const CheckBoxHallel = ({style, text, isChecked, setIsChecked}) => {
  return (
    <div className='check-box-hallel' style={style}>
      <input type='checkbox' checked={isChecked} onChange={()=> {setIsChecked(!isChecked)}}/>
      <label>{text}</label>
    </div>
  )
}

export default CheckBoxHallel
