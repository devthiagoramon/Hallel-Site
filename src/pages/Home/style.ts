import styled from "styled-components";

export const HomeContainer = styled.main`
  min-height: 100vh;
  flex-direction: column;
`;

export const ContainerHomeEvents = styled.div`

  width: 100%;
  min-height: 35vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  margin-left: 10px;

  @media screen and (max-width: 1400px){
    align-items: center;
  }

`

export const ContainerItens = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 10px 0;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }

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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 5px;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    align-items: center;
  justify-content: center;

  }
  @media screen and (max-width: 1400px) {
    align-items: center;
  justify-content: center;
    
  }
  //horarios

`

export const ContainerCards = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 30px;
    height: auto;
    min-height: 55vh;

  }
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    gap: 30px;
    height: auto;
    min-height: 55vh;
  }

`