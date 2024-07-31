import styled from "styled-components";

export const CardAdmEventsContainer = styled.div`
  display: grid;
  margin-top: 30px;
  background-color: ${(props) =>
    props.theme.mainColors.backgroundGrey};
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  column-gap: 60px;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    place-items: center;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    place-items: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    place-items: center;
  }
`;

export const CardAdmEventsNotFoundContainer = styled.div`
  background-color: ${(props) =>
    props.theme.mainColors.backgroundGrey};
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  min-height: 60%;
`;
