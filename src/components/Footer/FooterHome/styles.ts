import styled from "styled-components";


export const ContainerFooter = styled.footer`

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background-color: ${({ theme }) => theme.mainColors.principal};
    flex-direction: column;
    margin-top: 20px;

`

export const ContainerPartOne = styled.div`
display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background-color: ${({ theme }) => theme.mainColors.principal};
`

export const Title = styled.h1`

    font-size: bold;
    font-size: 28px;
    color: white;

`

export const ContainerLogo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5px;
    width: 20%;


    .container-sig{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        margin-left: 40px;
    }

    .div-icons{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        gap: 30px;
    }

`
export const Image = styled.img`
  width: 60%;
  object-fit: cover;
`;


export const ContainerLastMessage = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #6A737B;

    p{
        color: #6A737B;
        font-size: 20px;
    }

`

