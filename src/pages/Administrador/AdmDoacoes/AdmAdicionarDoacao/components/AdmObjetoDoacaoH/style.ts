import styled from "styled-components";

export const AdmObjetoDoacaoHContainer = styled.div`
  margin-top: 1rem;
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    justify-content: space-between;

    label {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .body {
    display: grid;
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr;
    height: fit-content;
    column-gap: 2rem;
    row-gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 100%;
    }
  }
`;

export const AdmObjetoDoacaoHItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px rgba(0, 0, 0, 0.3) solid;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;

  .items-container {
    display: flex;
    column-gap: 0.5rem;
    align-items: center;

    .amount {
      font-size: 18px;
      font-weight: 500;
      color: ${(props) => props.theme.mainColors.secondary};
    }

    span {
      font-size: 18px;
      font-weight: 400;
      color: ${(props) => props.theme.mainColors.text};
    }
  }
`;
