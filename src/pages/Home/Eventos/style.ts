import styled from "styled-components";

export const EventosContainer = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 175px 100%;
  margin-bottom: 15rem;
`;

export const HeaderEventosContainer = styled.header`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  width: 97%;
  height: 100%;

  padding: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    row-gap: 2rem;
  }
`;

export const LeftHeaderEventosContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 40%;
  height: 100%;

  h1 {
    margin: 0;
    padding: 0;
  }
  div {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-wrap: nowrap;

    width: 100%;
    column-gap: 2rem;
  }
`;

export const RigthHeaderEventosContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1f;
  width: 100%;
  height: 100%;
  align-self: flex-end;

  label {
    font-size: 18px;
    width: 100%;
    place-self: end start;
    font-weight: 600;
  }

  .options {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 30px;

    .MuiTextField-root {
      min-width: 200px;
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;

    .MuiTextField-root {
      min-width: 150px;
    }
  }
`;

export const BodyEventosContainer = styled.div`
  padding: 0 30px 30px 30px;
  margin-top: 30px;
  background-color: ${(props) =>
    props.theme.mainColors.backgroundGrey};
  min-height: 60vh;
  height: 100%;
  width: 96%;
  display: grid;
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
