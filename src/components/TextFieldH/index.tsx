import { HTMLProps } from "react"
import { InputH } from "../InputH/style"
import { TextFieldHContainer } from "./style"

interface TextFieldHProps {
  label: string,
  inputProps?: HTMLProps<HTMLInputElement>
}

const TextFieldH = ({ label, inputProps }: TextFieldHProps) => {
  return (
    <TextFieldHContainer>
      <label>{label}</label>
      <InputH {...inputProps} />
    </TextFieldHContainer>
  )
}

export default TextFieldH