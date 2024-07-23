import "@fontsource/inter";
import styled from "styled-components";

export const GlobalStyle = styled.div`
  * {
    overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.mainColors.background};
    font-family: "Inter", sans-serif;
  }
`;
