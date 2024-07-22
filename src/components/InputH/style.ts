import styled from "styled-components";

export const InputH = styled.input`
  min-width: 150px;
  min-height: 30px;
  border-radius: 6px;
  outline-width: 1px;
  padding: 9px;
  font-size: 16px;
  outline-color: ${(props) => props.theme.mainColors.text};
  &:focus {
    outline-color: ${(props) => props.theme.mainColors.secondary};
  }
  box-shadow: rgba(0,0,0, 0.15) 0px 4px 5px;
`;

export const InputIconContainerH = styled.div<{
  $startIcon: boolean;
  $endIcon: boolean;
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
  border-radius: 6px;
  outline-width: 1px;
  outline-color: ${(props) => props.theme.mainColors.text};
  box-shadow: rgba(0,0,0, 0.15) 0px 4px 0px;

  input {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    width: 100%;
    height: 100%;
  }

  input:focus {
    outline-color: ${(props) => props.theme.mainColors.secondary};
  }

  svg,
  img {
    max-height: 30px;
    max-width: 30px;
  }
`;
