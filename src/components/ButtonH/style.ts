import styled from "styled-components";

const whiteTextList = ["primary", "error", "success"];

export const ButtonHContainer = styled.div<{
  $mode:
    | "primary"
    | "secondary"
    | "ligthSecondary"
    | "success"
    | "error";
  $disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  min-height: 35px;
  max-height: 50px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 2px;
  background-color: ${(props) => {
    if (props.$disabled) return "#EBEBE4";
    switch (props.$mode) {
      case "primary":
        return props.theme.mainColors.principal;
      case "secondary":
        return props.theme.mainColors.secondary;
      case "ligthSecondary":
        return props.theme.mainColors.secondaryLigth;
      case "error":
        return props.theme.mainColors.error;
      case "success":
        return props.theme.mainColors.success;
    }
  }};

  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    font-weight: 400;
    outline: none;
    border: none;
    color: ${(props) =>
      whiteTextList.includes(props.$mode)
        ? props.theme.mainColors.whiteText
        : props.theme.mainColors.text};
    &:hover {
      cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
    }
  }

  svg,
  img {
    max-height: 30px;
    max-width: 30px;
    color: ${(props) =>
      whiteTextList.includes(props.$mode)
        ? props.theme.mainColors.whiteText
        : props.theme.mainColors.text};
  }
  &:hover {
    cursor: ${(props) => (props.$disabled ? "default" : "pointer")};
    opacity: ${(props) => (props.$disabled ? "1" : "0.85")};
  }
`;
