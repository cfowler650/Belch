import styled from "styled-components";

const StyledDishPage = styled.div`
    .dish-page-container {
        // border: 2px solid gray;
    }

    .dish-button-group {
        padding: 6px;
        button {
            width: 100px;
            height: 30px;
            font-family: "hind";
            font-size: 16px;
            margin-right: 10px;
            background: lightseagreen;
            border: 1.5px solid white;
        }
    }

    .sort-section-container {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            width: 50px;
            height: 30px;
            font-family: "hind";
            font-size: 16px;
            margin: 0 10px;
            background: none;
            border: none;
        }
    }

    .main-dish-image {
        max-width: 256px;
    }

    .avatar-image-review {
        max-width: 70px;
    }

    .review-container {
        // border: 2px solid blue;
        width: 50%;
    }

    .bottom-content-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        text-align: center;
        // border: 3px solid blue;
    }

    .reviews-generator-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        // border: 3px solid black;
    }
`;

export default StyledDishPage;
