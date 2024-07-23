import styled from "styled-components";

export const LinkHStyle = styled.a`
    color: ${(props) => props.theme.mainColors.secondary};
    font-size: inherit;
    font-weight: 500;

    &:hover{
        cursor: pointer;
    }
`