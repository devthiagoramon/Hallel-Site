import styled from "styled-components";

export const ContainerCarousel = styled.section`

    width: 100%;
    height: auto;
    flex-direction: row;

`


export const ImageItem = styled.img`

    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
    
    @media screen and (max-width: 1400px) {
        height: 380px;
    }

    @media screen and (max-width: 1200px) {
        height: 320px;
    }
`