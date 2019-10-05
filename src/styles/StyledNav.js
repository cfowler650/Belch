import styled from "styled-components";

const StyledNav = styled.div`
    .main-nav-container {
        display: flex;
        align-content: center;
        justify-content: space-evenly;
        background-color: LightSeaGreen;
        box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        border-radius: 0.5%;
    }

    a:link {
        text-decoration: none;
        padding: 1%;
        color: black;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }

    .nav-item-link {
        font-size: 20px;
        font-weight: bold;
    }
`;

export default StyledNav;
