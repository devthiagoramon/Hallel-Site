import styled from "styled-components";

export const DeleteModalHDescription = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.mainColors.text};
`;

export const DeleteModalHContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  background-color: ${(props) => props.theme.mainColors.whiteText};
  row-gap: 1rem;
`;
