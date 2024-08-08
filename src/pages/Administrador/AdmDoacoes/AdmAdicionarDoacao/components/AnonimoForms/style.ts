import styled from "styled-components";

export const AnonimoFormsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  column-gap: 1rem;
  row-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
