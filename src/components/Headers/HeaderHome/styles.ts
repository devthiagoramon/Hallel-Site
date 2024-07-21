import styled from "styled-components";

export const ContainerHeader = styled.header`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: #033117;
    padding: 10px;

    .div-menu-items{
        display: flex;
        flex-direction: column;
    }

`

export const ContainerItens = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 65%;
    height: 100%;
    
`

export const Title = styled.p`

    font-size: 20px;
    color: #F1F1F1;
    font-weight: bold;

`

export const ButtonTittle = styled.button`

    background-color: #033117;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Image = styled.img`

    width: 5%;
    object-fit: cover;


`