import styled from "styled-components";

export const ContainerCarouselSchedules = styled.div`

    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2%;

`

export const ContainerItem = styled.div`

    width: 100%;
    height: 230px;
    flex-direction: column;
    border-radius: 10px;
    justify-content: flex-start;
    align-items: flex-start;

    &:hover{
        cursor: grab;
    }

`

export const ImagemItem = styled.img`

    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
`

export const ContainerMessages = styled.div`

    border-radius: 0px 0px 10px 10px;
    background-color: ${({theme})=>theme.card.background};
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

`

export const TittleDay = styled.p`

    margin: 10px;
    padding: 0;
    font-size: 20px;
    color: white;
    font-weight: bold;

`