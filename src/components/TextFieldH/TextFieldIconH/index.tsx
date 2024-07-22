import { Dispatch, HTMLProps, ReactNode, SetStateAction } from 'react'
import { CSSProperties } from 'styled-components'
import { InputIconH } from '../../InputH'
import { TextFieldHContainer } from '../style'

interface TextFieldIconHProps {
    label: string,
    inputProps?: HTMLProps<HTMLInputElement>
    startIcon?: ReactNode
    endIcon?: ReactNode,
    value?: string,
    setValue?: Dispatch<SetStateAction<string>>,
    type: "contained" | "outlined",
    inputContainerStyle?: CSSProperties,
    inputStyle?: CSSProperties,
}

const TextFieldIconH = ({ type, inputContainerStyle, inputStyle, endIcon, label, startIcon, inputProps, setValue, value }: TextFieldIconHProps) => {
    return (
        <TextFieldHContainer>
            <label>{label}</label>
            <InputIconH containerStyle={inputContainerStyle} inputStyle={inputStyle} type={type} setValue={setValue} value={value} inputProps={inputProps} endIcon={endIcon} startIcon={startIcon} />
        </TextFieldHContainer>
    )
}

export default TextFieldIconH