import styled from "styled-components";

export const ContainerCarousel = styled.section`

    width: 100%;
    height: auto;
    flex-direction: row;

`

export const DivItem = styled.div`

    position: relative;
    width: 100%;
    height: 100%;

`

export const ImageItem = styled.img`

    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    transition: 1.5s;
    &:hover{
        cursor: grab;
        transform: scale(1.1);
        border-radius: 20px; 
    }
    
    @media screen and (max-width: 1400px) {
        height: 150px;
    }

    @media screen and (max-width: 1200px) {
        height: 150px;
    }

`

export const TitleEvents = styled.h4`

    color: white;
    font-weight: bold;
    margin: 10px;
    padding: 0;
    font-size: 30px;
    position: absolute;
    bottom: 0;
    left: 0;

`