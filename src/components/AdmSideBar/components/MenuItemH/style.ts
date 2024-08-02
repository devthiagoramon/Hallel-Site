import styled from "styled-components";

export const MenuItemHContainer = styled.div<{ $selected?: boolean }>`
  display: flex;
  padding: 1rem;
  margin: 0.75rem 0;
  align-items: center;
  width: 100%;
  column-gap: 1rem;
  color: ${(props) =>
    props.$selected
      ? props.theme.mainColors.secondary
      : props.theme.mainColors.whiteText};

  label {
    font-size: 18px;
    font-weight: 600;
  }

  label:hover,
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
