import styled from "styled-components";

export const InputH = styled.input<{
  $type: "contained" | "outlined";
}>`
  min-width: 150px;
  min-height: 30px;
  border-radius: ${(props) =>
    props.$type === "outlined" ? "0" : "6px"};
  outline-width: 1px;
  padding: 9px;
  font-size: 16px;
  border: ${(props) =>
    props.theme.mainColors.text ? "solid" : "none"};
  border-color: ${(props) => props.theme.mainColors.text};
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  &:focus {
    border: none;
    outline-color: ${(props) => props.theme.mainColors.secondary};
  }
  background-color: ${(props) =>
    props.$type === "contained" ? "#FAFAFA" : "transparent"};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 5px;
`;

export const InputIconContainerH = styled.div<{
  $startIcon: boolean;
  $endIcon: boolean;
  $type: "contained" | "outlined";
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${(props) =>
    props.$startIcon || props.$endIcon ? "0.5rem" : "0px"};
  padding: 9px;
  font-size: 16px;
  min-width: 150px;
  min-height: 35px;
  border-radius: ${(props) =>
    props.$type === "outlined" ? "0" : "6px"};
  border: ${(props) =>
    props.theme.mainColors.text ? "solid" : "none"};
  border-color: ${(props) => props.theme.mainColors.text};
  border-style: hidden hidden solid hidden;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 0px;

  input {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    background-color: transparent;
    width: 100%;
    height: 100%;
  }

  input:focus {
    border: none;
    outline-color: ${(props) => props.theme.mainColors.secondary};
  }

  svg,
  img {
    max-height: 30px;
    max-width: 30px;
  }
`;
