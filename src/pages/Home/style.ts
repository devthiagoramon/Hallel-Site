import styled from "styled-components";

export const HomeContainer = styled.main`
  min-height: 100vh;
  flex-direction: column;
`;

export const ContainerItens = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`

export const ContainerWelcome = styled.section`

  width: 60%;
  height: 100%;    //bem vindo a comunidade
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin-top: 5px;
`

export const TittleWelcome = styled.h1`

  color: black;
  font-size: 30px;
  margin: 0px;

`

export const ContainerSchedules = styled.section`

  width: 35%;
  height: 100%;
  //horarios

`

export const ContainerCards = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`