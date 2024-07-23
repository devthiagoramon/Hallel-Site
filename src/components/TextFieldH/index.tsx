import { Dispatch, HTMLProps, SetStateAction } from "react"
import { CSSProperties } from "styled-components"
import { InputH } from "../InputH/style"
import { TextFieldHContainer } from "./style"

interface TextFieldHProps {
  label: string,
  inputProps?: HTMLProps<HTMLInputElement>,
  labelStyle?: CSSProperties,
  inputStyle?: CSSProperties,
  type: "contained" | "outlined",
  value?: string,
  setValue?: Dispatch<SetStateAction<string>>,

}

const TextFieldH = ({ label, inputProps, labelStyle, type, inputStyle, setValue, value }: TextFieldHProps) => {
  return (
    <TextFieldHContainer>
      <label style={labelStyle}>{label}</label>
      <InputH value={value} onChange={(e) => setValue && setValue(e.target.value)} style={inputStyle} $type={type} {...inputProps} />
    </TextFieldHContainer>
  )
}

export default TextFieldH