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
        width: 50%;
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
        justify-content: center;
    }

    @media screen and (max-width: 1400px) {
    }
`;
export default StyledMenuPage;
