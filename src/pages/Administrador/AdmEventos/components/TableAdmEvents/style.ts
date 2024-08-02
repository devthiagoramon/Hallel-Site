import styled from "styled-components";

export const RowTextComponent = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const ActionsTableContainer = styled.div`
  display: flex;
  align-items: center;
  row-gap: 0.5rem;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.mainColors.text};

  .delete {
    color: ${(props) => props.theme.mainColors.error};
  }
`;
