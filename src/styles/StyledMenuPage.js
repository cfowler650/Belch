import styled from "styled-components";

const StyledMenuPage = styled.div`
    display: flex;
    overflow: hidden;
    color: black;

    .menu-page-container {
        text-align: center;
        justify-content: center;
        width: 100%;
        margin: 2%;
        // border: 2px solid blue;
    }

    .menu-page-child-1 {
        // border: 1px solid red;
    }

    .dishes-container {
        // border: 2px solid darkgrey;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dish-card {
        display: flex;
        width: 50%;

        margin: 2vh;
        flex-direction: column;
        align-items: center;
        background-color: white;
        // box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
        box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        border-radius: 0.5%;
    }

    .dish-image {
        max-width: 200px;
    }

    .dish-name-div {
        display: flex;
        padding: 0 2vh;
        // border: 1px solid blue;
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
