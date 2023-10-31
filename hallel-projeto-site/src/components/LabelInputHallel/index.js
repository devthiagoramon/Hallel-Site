import React from 'react'
import "./label-input-hallel.css"

const LabelInputHallel = ({children, isRequired}) => {
  return (
    <label className='label-input-hallel'>
      {children}
      {isRequired && <span>*</span>}
    </label>
  )
}

export default LabelInputHallel
