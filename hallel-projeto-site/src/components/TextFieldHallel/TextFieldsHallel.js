import styled from "styled-components";
import "./text-fields-hallel.css"
import {RxCross2} from "react-icons/rx"

const TextFieldTemplate = styled.input`
  font-size: 18px;
  font-weigth: 400;
  color: #252525;
  height: 40px;
  border: ${(props) => (props.error ? "#E74C3C" : "none")};
  box-shadow: rgba(0, 0, 0, 0.20) 0 2px 2px;
  padding: 5px;
  border-radius: 4px;
  transition: all .1s linear;
  -webkit-transition: all .1s linear;
  -moz-transition: all .1s linear;
  &:focus{
    border: none;
    outline: 2px #5DADE2 solid;
    outline-offset: 1px;
  }
  &::placeholder{
    color: transparent;
  }
`

export const InputHallelNormal = styled(TextFieldTemplate)`
  border-bottom: ${(props) => (props.error ? "#E74C3C 4px solid" : "4px solid #007B34")};
`

export const InputHallelOutlined = styled(TextFieldTemplate)`
  border: ${(props) => (props.error ? "#E74C3C 2px solid" : "#007B34 2px solid")};
`

export const ContainerInputHallelError = ({style, errorMessage, children}) => {
  return(
    <div className="cont-error-input-hallel" style={style}>
      {children}
      <span className="error-message-input-hallel"><RxCross2 size={20}/>{errorMessage}</span>
    </div>
  )
}

export const TextFieldHallelNormal = ({title, onChange, style}) => {
    return (
        <div className={"text-field-normal"}>
            <InputHallelNormal onChange={onChange} style={style}/>
            <label>{title}</label>
        </div>
    )
}

export const TextFieldHallelOutlined = ({title, onChange, style}) => {
    return(
        <div className={"text-field-normal"}>
            <InputHallelOutlined onChange={onChange} style={style}/>
            <label>{title}</label>
        </div>
    )
}

