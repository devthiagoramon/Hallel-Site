import styled from "styled-components";

export const AdmListSelectUserHContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 100%;
  grid-template-rows: 70px 300px;
  border: 2px rgba(0, 0, 0, 0.1) solid;
  border-radius: 0.5rem;
  padding: 0.5rem;

  .user-container {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    max-height: 300px;
    overflow-y: auto;
    row-gap: 1rem;
    column-gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 100%;
      max-height: 400px;
    }
  }
`;
