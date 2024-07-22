import styled from "styled-components";

export const TitleHStyle = styled.h1<{
  $size: "large" | "medium" | "short";
  $color: "white" | "black";
}>`
  color: ${(props) =>
    props.$color === "white"
      ? props.theme.mainColors.whiteText
      : props.theme.mainColors.text};
  font-size: ${(props) => {
    switch (props.$size) {
      case "large":
        return "2.25rem";
      case "medium":
        return "2rem";
      case "short":
        return "1.5rem";
    }
  }};
`;
