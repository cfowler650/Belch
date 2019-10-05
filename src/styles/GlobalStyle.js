import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
     box-sizing: border-box;
     letter-spacing: 0.14px;

    a:link {
        text-decoration: none;
        color: black;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }
 }

 body {
    font-family: 'Hind';
    //  background-color: lightsteelblue;
 }

 h1 {
     font-family: 'Hind'
 }


`;

export default GlobalStyle;
