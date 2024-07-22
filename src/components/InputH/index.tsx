import { HTMLProps, ReactNode } from "react"
import { InputIconContainerH } from "./style"

interface InputIconHProps {
  startIcon?: ReactNode & Element,
  endIcon?: ReactNode & Element
  inputProps?: HTMLProps<HTMLInputElement>
}

export const InputIconH = ({ endIcon, startIcon, inputProps }: InputIconHProps) => {
  return (
    <InputIconContainerH $startIcon={!!startIcon} $endIcon={!!endIcon}>
      {startIcon}
      <input {...inputProps} />
      {endIcon}
    </InputIconContainerH>
  )
}