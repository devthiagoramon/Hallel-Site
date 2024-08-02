import styled from "styled-components";

export const ModalHContainer = styled.div`
  min-width: 20%;
  max-width: 40%;
  background-color: ${(props) => props.theme.mainColors.whiteText};
  color: ${(props) => props.theme.mainColors.text};
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-columns: 100%;
  row-gap: 0.5rem;
  h1 {
    padding: 0;
    margin: 0;
  }
`;
