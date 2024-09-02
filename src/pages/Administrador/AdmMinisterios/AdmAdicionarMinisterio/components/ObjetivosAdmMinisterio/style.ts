import styled from "styled-components";

export const ContainerObjetivosAdmMinisterio = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderObjetivosAdmMinisterio = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  justify-content: space-between;

  label {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.mainColors.text};
  }
`;

export const BodyObjetivosAdmMinisterio = styled.main`
  width: 100%;
  margin-top: 1rem;
  height: 100%;

  ul {
  }

  li {
    font-weight: 400;
    font-size: 18px;
  }
`;
