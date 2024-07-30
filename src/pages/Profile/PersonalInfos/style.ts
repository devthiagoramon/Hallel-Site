import styled from "styled-components";

export const PersonalInfosContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 125px);

  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.mainColors.text};

  div {
    padding: 1rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 0.5rem;
  }
`;
