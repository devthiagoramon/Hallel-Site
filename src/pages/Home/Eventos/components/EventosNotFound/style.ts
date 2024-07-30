import styled from "styled-components";

export const EventosNotFoundContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
  grid-template-rows: repeat(2, 100px);
  margin-top: 60px;

  svg {
    color: ${(props) => props.theme.mainColors.error};
  }

  span {
    color: ${(props) => props.theme.mainColors.text};
    font-size: 24px;
    font-weight: 500;
  }
`;
