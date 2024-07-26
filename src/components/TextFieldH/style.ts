import styled from "styled-components";

export const TextFieldHContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  label {
    color: ${(props) => props.theme.mainColors.text};
    font-weight: 600;
    font-size: 16px;
    width: 100%;
  }
  input,
  div,
  section {
    margin-top: 8px;
  }
`;
