import styled from "styled-components";

const StyledDishPage = styled.div`
    .dish-page-container {
        // border: 2px solid gray;
    }
    .dish-container {
        padding-bottom: 3%;
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
        max-width: 500px;
        min-height: 250px;
    }

    .avatar-image-review {
        max-width: 70px;
        text-align: initial;
    }

    .review-container {
        // border: 2px solid blue;
        width: 100%;
        align-items: flex-start;
        display: flex;
        margin: 20px;
        box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        border-radius: 0.5%;
        padding: 3%;
    }

    .review-content {
        display: flex;
        margin: 0 10px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
    }

    .bottom-content-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        text-align: initial;
        // border: 3px solid blue;
        box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        border-radius: 0.5%;
    }

    .reviews-generator-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: initial;
        // border: 3px solid black;
    }
`;

export default StyledDishPage;
