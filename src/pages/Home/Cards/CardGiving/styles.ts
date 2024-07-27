import styled from "styled-components";

export const ContainerMainCardGiving = styled.div`
  position: relative;
  width: 50%;
  height: 90%;
  background-color: ${({ theme }) => theme.mainColors.secondary};
  border-radius: 30px;

    @media screen and (max-width: 1200px) {
        width: 40%;
    }
    @media screen and (max-width: 1400px) {
        width: 40%;
    }
`;

export const Circle = styled.div`
  position: absolute;
  top: -20.5px;  
  left: -20.5px; 
  width: 50px;
  height: 50px;
  background-color: ${({theme})=> theme.mainColors.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1{
        padding: 0;
        margin: 0;
        color: white;
        font-weight: bold;
        font-size: 36px;
        margin-left: 10px;
    }
`;

export const ContainerTexts = styled.section`

    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 1200px) {
        gap: 15px;

    }
    @media screen and (max-width: 1400px) {
        gap: 15px;
    }

`

export const TextPrimary = styled.p`

    margin: 0;
    margin-left: 20px;
    color: white;
    font-size: 24px;
    width: 90%;

    @media screen and (max-width: 1200px) {
        font-size: 20px;

    }
    @media screen and (max-width: 1400px) {
        font-size: 20px;
    }
`
export const TextSecondary = styled.p`

    margin: 0;
    margin-left: 20px;
    color: white;
    font-size: 18px;
    width: 90%;

    @media screen and (max-width: 1200px) {
        font-size: 14px;

    }
    @media screen and (max-width: 1400px) {
        font-size: 14px;
    }
`

export const ContainerButtonCardGiving = styled.section`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 25%;

`

export const ButtonCardGiving = styled.button`

    border: none;
    border-radius: 15px;
    background-color: ${({theme}) => theme.card.background};
    color: ${({theme}) => theme.card.text};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 90%;
    font-weight: bold;
    padding: 10px;

    @media screen and (max-width: 1200px) {
        margin: 15px;

    }
    @media screen and (max-width: 1400px) {
        margin: 15px;
    }
`