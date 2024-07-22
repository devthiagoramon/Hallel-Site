import styled from "styled-components";

export const SignContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  overflow: hidden;

  .go_back {
    position: absolute;
    left: 2rem;
    top: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 30% 1fr;
    place-items: center;
    row-gap: 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    svg,
    img {
      max-width: 210px;
      max-height: 105px;
    }
  }

  @media (max-width: 768px) {
    svg,
    img {
      max-width: 240px;
      max-height: 160px;
    }
  }

  svg,
  img {
    width: 460px;
    height: 380px;
  }
`;

export const FormContainer = styled.form`
  padding: 50px 90px;
  width: 60%;
  height: 85%;
  border-radius: 30px;
  overflow: hidden;

  // Display flex in vertical
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: 1.5rem;

  justify-content: space-between;
  background-color: ${(props) => props.theme.mainColors.principal};
  color: ${(props) => props.theme.mainColors.whiteText};

  main {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 100%;
    row-gap: 1rem;
    width: 100%;

    label {
      color: ${(props) => props.theme.mainColors.whiteText};
    }

    section {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
    div,
    input {
      width: 100%;
      color: ${(props) => props.theme.mainColors.whiteText};
      border-color: ${(props) => props.theme.mainColors.whiteText};
    }
  }

  footer {
    display: flex;
    width: 100%;
    label {
      color: ${(props) => props.theme.mainColors.secondaryLigth};
      font-size: 12px;
      font-weight: bold;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding: 25px 45px;
    height: 100%;
    overflow-y: auto;
    width: 60%;
    border-radius: 12px;
    min-height: 300px;
  }
`;
