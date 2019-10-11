import theme from "styled-theming";
import styled, { ThemeProvider } from "styled-components";

const backgroundColor = theme("mode", {
    homepage: "none",
    default: "#222"
});

const StyledNav = styled.div`
    .main-nav-container {
        display: flex;
        align-content: center;
        justify-content: space-evenly;
        background-color: ${backgroundColor};
        box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        border-radius: 0.5%;
        z-index: 3;
    }

    a:link {
        text-decoration: none;
        padding: 1%;
        color: black;
        z-index: 3;
    }

    a:visited {
        text-decoration: none;
        color: black;
        z-index: 3;
    }

    .nav-item-link {
        font-size: 20px;
        font-weight: bold;
        z-index: 3;
    }
`;

export default StyledNav;
