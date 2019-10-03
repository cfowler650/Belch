import styled from "styled-components";

const StyledMenuPage = styled.div`
    display: flex;
    overflow: hidden;
    color: red;

    .menu-page-container {
        text-align: center;
        justify-content: center;
        width: 100%;
        margin: 2%;
        border: 2px solid blue;
    }

    .menu-page-child-1 {
        border: 1px solid red;
    }

    .dishes-container {
        border: 2px solid darkgrey;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dish-card {
        display: flex;
        width: 70%;
        border: 4px solid seagreen;
        margin: 2vh;
    }

    .dish-image {
        max-width: 200px;
    }

    .dish-name-div {
        display: flex;
        padding: 0 2vh;
        border: 1px solid blue;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        max-height: 200px;
    }

    .dish-detail {
        color: black;
        font-size: 16px;
        margin: 0.5vh;
        text-align: left;
    }

    .dish-name-h2 {
        margin: 0px;
        padding: 0px;
    }

    a {
        padding: 0px;
        margin: 0px;
    }

    @media screen and (max-width: 1400px) {
    }
`;
export default StyledMenuPage;
