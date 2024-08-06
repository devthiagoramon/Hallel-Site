import styled from "styled-components";

export const DashboardAdmContainer = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 75px auto;
`;

export const HeaderDashBoardAdmContainer = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const BodyDashBoardAdmContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 1rem;
  margin-top: 60px;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 100%);
    column-gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 100%);
    column-gap: 10px;
  }
`;
