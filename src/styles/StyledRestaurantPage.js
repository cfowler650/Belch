import styled from "styled-components";

const StyledRestaurantPage = styled.div`
    .restaurant-card {
        width: 60%;
        align-items: flex-start;
        display: flex;
        margin: 20px;
        box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        border-radius: 0.5%;
        padding: 1%;
        background: white;
        min-height: 120px;

    }

    .restaurant-content {
        display: flex;
        margin: 0 10px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
    }

    .restaurant-image {
        max-width: 100px;
        text-align: initial;
    }

    .nav-sticky {
        padding: 0 36px 0 36px;
        display: block;
        top: 0px;
        right: 0px;
        left: 0px;
        /* z-index: 400; */
        // height: 400px;
        background-color: rgb(255, 255, 255);
        transition: background-color 0.2s ease-in-out 0s;
        box-shadow: 0 8px 10px -2px #C6961D;

    }

    .restaurant-list-container {
        padding: 0 36px 0 36px;
        // height: 1000px;
        background-color: rgb(255, 255, 255);
        border: 2px solid black;
        top: 20;
    }
`;

export default StyledRestaurantPage;
