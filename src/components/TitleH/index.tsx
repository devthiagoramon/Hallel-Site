import { CSSProperties } from "styled-components"
import { TitleHStyle } from "./style"

interface TitleHType {
  size: "large" | "medium" | "short",
  children: string | React.ReactNode,
  color: "white" | "black",
  textStyle?: CSSProperties
}

const TitleH = ({ size, color, children, textStyle }: TitleHType) => {
  return (
    <TitleHStyle style={textStyle} $color={color} $size={size}>{children}</TitleHStyle>
  )
}

export default TitleH