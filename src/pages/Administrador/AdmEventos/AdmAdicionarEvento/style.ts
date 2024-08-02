import styled from "styled-components";

export const AdmAdicionarEditarEventoContainer = styled.div`
  width: 100%;
  min-height: 100%;
`;

export const AdmAdicionarEditarEventoForm = styled.form`
  margin-top: 1.875rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 0.5rem;

  .form-controller {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.mainColors.text};
  }
`;

export const AdmAdicionarEditarEventoInputs = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 0.5rem;
  column-gap: 0.5rem;

  .input-container {
    display: grid;
    grid-template-columns: 100%;
    row-gap: 0.5rem;
  }

  .MuiTextField-root,
  .MuiTextarea-root {
    width: 90%;
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;
