import styled from "styled-components";

export const AdmSideBarContainer = styled.section<{
  $expanded?: boolean;
}>`
  display: grid;
  width: 23vw;
  min-height: 100vh;
  height: 100%;
  grid-template-rows: repeat(6, 120px);
  background-color: ${(props) => props.theme.mainColors.principal};
  place-items: center start;

  h4 {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.mainColors.whiteText};
  }

  .list-items {
    height: 100%;
    width: 90%;
  }
`;

export const AdmSideBarHeaderContainer = styled.header`
  display: flex;
  column-gap: 1rem;
  padding: 0.25rem;
  align-items: center;
  height: 120px;

  img {
    width: 90px;
    height: 60px;
  }
`;
