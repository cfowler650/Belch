import styled from "styled-components";

const StyledRestaurantPage = styled.div`
    .restaurant-list-container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .restaurant-card {
        display: flex;
        justify-content: center;
        box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        border-radius: 0.5%;
        width: 600px;
        margin-bottom: 2%;
        padding-bottom: 4%;
    }

    .restaurant-image {
        width: 500px;
    }
`;

export default StyledRestaurantPage;
