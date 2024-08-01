import styled from "styled-components";

export const SelectImageContainerInfos = styled.label`
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  font-size: 24px;
  font-weight: 500;
  span {
    color: ${(props) => props.theme.mainColors.text};
  }
`;

export const SelectImageContainerOutsideContainer = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 85% 15%;
  row-gap: 0.5rem;
  border-radius: 0.5rem;
`;

export const SelectImageContainerRoot = styled.div<{
  $error?: boolean;
}>`
  background-color: ${(props) =>
    props.theme.mainColors.backgroundGrey};
  position: relative;
  width: 100%;
  height: 100%;
  border: ${(props) =>
    props.$error
      ? `2px ${props.theme.mainColors.error} solid`
      : `none`};
  img {
    object-fit: contain;
  }
  box-shadow: rgba(0, 0, 0, 0.15) 0 4px 5px;
  border-radius: 0.5rem;
`;
