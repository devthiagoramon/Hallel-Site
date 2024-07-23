import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSSProperties } from 'styled-components'
import { LinkHStyle } from './style'


interface LinkHType {
  to: string
  children: string | ReactNode,
  textStyle?: CSSProperties
}

const LinkH = ({ to, children, textStyle }: LinkHType) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(to)
  }
  return (
    <LinkHStyle style={textStyle} onClick={handleClick}>{children}</LinkHStyle>
  )
}

export default LinkH