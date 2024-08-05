import styled from "styled-components";

interface Props{
    $height?: string
}

export const ContainerCircularProgress = styled.div<Props>`

    width: 100%;
    height: ${({$height})=> $height ? $height : "auto"};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`