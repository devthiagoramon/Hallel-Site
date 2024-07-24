import styled from "styled-components";

export const ContainerListItens = styled.div`
  width: 20%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

export const ListItensUl = styled.ul`
  width: 100%;
  padding: 0;
  margin-left: 1.5rem;

  li {
    font-size: 20px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.card.text};
    width: 50%;
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid
        ${({ theme }) => theme.mainColors.secondary};
    }
  }
`;
