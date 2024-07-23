import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #033117;
  padding: 10px;

  .div-menu-items {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: #033117;
    padding: 10px;

  }

`

export const ContainerItens = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 65%;
  height: 100%;
`;

export const Title = styled.p`
  font-size: 20px;
  color: #f1f1f1;
  font-weight: bold;
`;

export const ButtonTittle = styled.button`
  background-color: #033117;
  border: none;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    border-radius: 10px;
    background-color: #01210f;
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 5%;
  height: 70px;
  object-fit: cover;
`;
