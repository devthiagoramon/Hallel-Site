import { Dispatch, ReactNode, SetStateAction } from "react"
import { CSSProperties } from "styled-components"
import { InputIconContainerH } from "./style"

interface InputIconHProps {
  startIcon?: ReactNode,
  endIcon?: ReactNode,
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  value?: string,
  setValue?: Dispatch<SetStateAction<string>>
  type: "contained" | "outlined",
  inputStyle?: CSSProperties,
  containerStyle?: CSSProperties
}

export const InputIconH = ({ type, endIcon, startIcon, inputProps, setValue, value, inputStyle, containerStyle }: InputIconHProps) => {
  return (
    <InputIconContainerH style={containerStyle} $type={type} $startIcon={!!startIcon} $endIcon={!!endIcon}>
      {startIcon}
      <input style={inputStyle} value={value} onChange={(e) => setValue && setValue(e.target.value)}  {...inputProps} />
      {endIcon}
    </InputIconContainerH>
  )
}