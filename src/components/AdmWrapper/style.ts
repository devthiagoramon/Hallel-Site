import styled from "styled-components";

export const AdmWrapperContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  column-gap: 1rem;
`;

export const AdmWrapperContent = styled.main`
  margin-left: 24vw;
  width: 73vw;

  @media (max-width: 1024px) {
    width: 89vw;
    margin-left: 11vw;
  }
  @media (max-width: 768px) {
    width: 97vw;
    margin-left: 0;
    padding: 1rem;
  }
`;
