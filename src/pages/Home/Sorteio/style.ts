import styled from "styled-components";

export const SorteioContainer = styled.main`
  width: 92%;
  min-height: 100vh;
  padding: 60px;

  .banner {
    margin-top: 60px;
    width: 100%;
    height: 160px;
  }
`;

export const InfosSorteioContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 100px;
`;

export const LeftInfosSorteioContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;

  h1 {
    margin: 0;
    padding: 0;
  }

  .last_winners {
    font-size: 18px;
    font-weight: 500;
    margin-top: 1rem;
  }

  .carrosel {
    width: 100%;
    height: 315px;
    margin-top: 1rem;
    background-color: ${(props) =>
      props.theme.mainColors.backgroundGrey};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const RigthInfosSorteioContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 40px 35px auto;
  row-gap: 1rem;

  .winners {
    margin-top: 0.4rem;
    font-size: 24px;
    font-weight: bold;
  }

  span {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const GanhadoresMesSorteioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 300px;
    grid-template-rows: auto;
  }
`;
