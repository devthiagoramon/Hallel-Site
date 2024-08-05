import styled from "styled-components";

export const ContainerDetailsEvent = styled.div`

    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

`

export const ContainerImages = styled.section`

    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ImageBanner = styled.img`

    width: 100%;
    height: 375px;
    object-fit: cover;

`
export const ImageEvent = styled.img`

    width: 800px;
    height: 320px;
    border-radius: 8px;
    position: absolute;
    top: 90px;

`

export const ContainerHeaderDetailsEvents = styled.div`

    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

`
export const ContainerInfosHeaderDetails = styled.section`

    width: 45%;
    height: 100%;
    margin-left: 10px;

`

export const ContainerToParticipate = styled.section`

    width: 22%;
    height: 90%;
    margin-right: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: rgba(0, 0, 0, 0.3) 0 2px 5px;

    .header{
        width: 100%;
        border-radius: 8px 8px 0px 0px;
        background-color: ${({ theme }) => theme.card.header};
        margin: 0;
        padding: 0;
    }

    .title-header{
        margin: 10px;
        padding: 0;
        font-size: 18px;
        font-weight: bold;
        color: white;
    }

    .container-infos{
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .div-infos{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-left: 10px;

        h5{
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-weight: bold;
            color: black;
        }

        p{
            margin: 0;
            padding: 0;
            font-size: 14px;
            color: black;
        }
    }

    .div-counts{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-right: 10px;

        p{
            margin: 0;
            padding: 0;
            font-size: 20px;
            color: black;
        }

        .icon{
            cursor: pointer;

            &:hover{
                color: ${({ theme }) => theme.card.header};
            }
        }
    }

    .container-button{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        button{
            width: 90%;
            height: 35px;
            background-color: ${({theme})=> theme.mainColors.success};
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;

            &:hover{
                cursor: pointer;
            }
            
        }
    }

`