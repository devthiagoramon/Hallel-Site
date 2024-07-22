import styled from "styled-components";

export const TextFieldHContainer = styled.div`
  box-shadow: rgba(0,0,0, 0.10) 0px 4px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  label {
    color: ${(props) => props.theme.mainColors.text};
    font-weight: 600;
    width: 100%;
  }
  input,
  div {
    margin-top: 8px;
  }
`;
