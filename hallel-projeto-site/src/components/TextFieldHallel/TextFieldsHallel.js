"use client"
import styled from "styled-components";
import "./text-fields-hallel.css"

const TextFieldTemplate = styled.input`
  font-size: 16px;
  color: #252525;
  height: 45px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.20) 0 2px 2px;
  padding: 5px;
  border-radius: 4px;
  transition: all .1s linear;
  -webkit-transition: all .1s linear;
  -moz-transition: all .1s linear;
`

const InputNormal = styled(TextFieldTemplate)`
  border-bottom: 2px solid #007B34;
`

const InputOutlined = styled(TextFieldTemplate)`
  border: #007B34 2px solid;
`

export const TextFieldNormal = ({title, onChange}) => {
    return (
        <div className={"text-field-normal"}>
            <InputNormal onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}

export const TextFieldOutlined = ({title, onChange}) => {
    return(
        <div className={"text-field-normal"}>
            <InputOutlined onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}

