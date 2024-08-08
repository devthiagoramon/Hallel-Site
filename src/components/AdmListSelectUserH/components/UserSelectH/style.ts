import styled from "styled-components";

export const UserSelectHContainer = styled.div<{
  $selected?: boolean;
}>`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
  height: 60px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$selected
      ? props.theme.mainColors.secondaryLigth
      : "transparent"};

  .right {
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 0.5rem;

    label {
      font-size: 16px;
      font-weight: 500;
    }

    span {
      font-size: 14px;
      font-weight: 400;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
