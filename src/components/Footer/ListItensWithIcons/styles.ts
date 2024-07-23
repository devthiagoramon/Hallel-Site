import styled from "styled-components";


export const Container = styled.div`

    width: 40%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

`

export const SectionItens = styled.section`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 20px;

    p{
        color: white;
        font-size: 20px;
        font-weight: 400;
        width: 70%;
    }

`

export const SectionMessage = styled.section`

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    p{
        font-weight: 400;
        font-size: 20px;
        color: white
    }

    .div{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        margin-left: 30px;
    }

`