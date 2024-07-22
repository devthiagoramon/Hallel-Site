import { HTMLProps, ReactNode } from 'react'
import { InputIconH } from '../../InputH'
import { TextFieldHContainer } from '../style'

interface TextFieldIconHProps {
    label: string,
    inputProps?: HTMLProps<HTMLInputElement>
    startIcon?: Element & ReactNode
    endIcon?: Element & ReactNode
}

const TextFieldIconH = ({endIcon, label, startIcon, inputProps}:TextFieldIconHProps) => {
    return (
        <TextFieldHContainer>
            <label>{label}</label>
            <InputIconH inputProps={inputProps} endIcon={endIcon} startIcon={startIcon}/>
        </TextFieldHContainer>
    )
}

export default TextFieldIconH