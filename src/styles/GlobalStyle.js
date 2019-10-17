import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        overflow: auto;
        margin: 0;
        background:black;
    }
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
    margin: 0px;
 }

 h1 {
     font-family: 'Hind'
 }


* {
  box-sizing: border-box;

}



`;

export default GlobalStyle;
