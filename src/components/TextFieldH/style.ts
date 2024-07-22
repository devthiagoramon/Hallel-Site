import styled from "styled-components";

export const TextFieldHContainer = styled.div`
    label {
        color: ${(props) => props.theme.mainColors.text};
        font-weight: 600;
        width: 100%;
    }
    input, div {
        margin-top: 8px;
    }
`