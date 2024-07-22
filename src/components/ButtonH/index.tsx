import { HTMLProps, ReactNode } from "react"
import { ButtonHContainer } from "./style"


interface ButtonHProps {
    mode: "primary" | "secondary" | "ligthSecondary" | "success" | "error",
    startIcon?: ReactNode,
    endIcon?: ReactNode,
    children:  string | (ReactNode & Element),
    containerProps?: HTMLProps<HTMLDivElement>
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

const ButtonH = ({ mode, endIcon, startIcon, children, buttonProps, containerProps }: ButtonHProps) => {
    return (
        <ButtonHContainer $mode={mode} {...containerProps} >
            {startIcon}
            <button {...buttonProps}>{children}</button>
            {endIcon}
        </ButtonHContainer>
    )
}

export default ButtonH