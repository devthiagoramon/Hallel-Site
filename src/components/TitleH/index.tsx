import { TitleHStyle } from "./style"

interface TitleHType {
  size: "large" | "medium" | "short",
  children: string | React.ReactNode,
  color: "white" | "black"
}

const TitleH = ({ size, color, children }: TitleHType) => {
  return (
    <TitleHStyle $color={color} $size={size}>{children}</TitleHStyle>
  )
}

export default TitleH