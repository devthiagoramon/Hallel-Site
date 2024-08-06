import styled from "styled-components";

export const AdmMenuRoutesContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
`;
