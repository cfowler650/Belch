import styled from "styled-components";

const StyledRestaurantPage = styled.div`
    .restaurant-card {
        width: 60%;
        align-items: flex-start;
        display: flex;
        margin: 20px;
        // box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        // border-radius: 0.5%;
        // padding: 1%;

        min-height: 120px;
        padding-top: 1px;
        padding-left: 0px;
        padding-right: 0px;


    }

    .restaurant-content {
        display: flex;
        margin: 0 10px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        padding: 0;
        margin: 1px;

    }

    .restaurant-name-top{
        background: rgb(76, 148, 151);
        width: 100%;
        padding: 6px;
        display: flex;
        justify-content: space-between;
    }
    .restaurant-name-top-header{
        width: 200px;
        font-size: 20px;
        font-weight: bold;
         padding-left: 6px;
         color: white;
    }
    .restaurant-price {
        font-size: 30;
        font-family: "Ribeye";
        margin: 0px;
        color: white;
    }
    .restaurant-inner-content {
         color: white;
         width: 100%;
         background: #1D7C7F;
    }
    .restaurant-cuisine-text {
        margin: 0;
        padding-left: 12px;
    }

    .restaurant-reviews-text {
        margin:0;
        padding-left: 12px;
        padding-top: 0.5%;
    }

      .restaurant-distance-text {
       margin: 0;
       padding-right: 12px;
       font-size: 24px;
       outline: 0;
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
        // box-shadow: 0 8px 10px -2px #C6961D;

    }

    .restaurant-list-container {
        padding: 0 36px 0 36px;
        // height: 1000px;

        border: 2px solid black;
        top: 20;
        display: flex;
        background: black;
        justify-content: center;
    }

    .main-content-rendered {
         display: flex;
         padding: 2%;
         height: 300px;
         justify-content: center;
    }

    .main-content-rendered-child {

    }

    .main-content-rendered-child-2 {
        max-height: 400px;
        width: 60%;
        margin-right: 4%;
        padding-right: 4%
    }
    .top-rated-dish-content {
        style={{ paddingLeft: "3%", flexDirection: "column", justifyContent: "space-evenly"}}
        padding-left: 3%;
        flex-direction: column;
        justify-content: space-evenly;
        display: flex; //may need to turn this off if seeing issues
    }

    .rendered-child-image-div {
        display: flex;
        max-width: 600px;
    }

    .rendered-child-image {
        flex: 1;
        max-width: 100%;
    }


    .main-content-welcome {
        display: flex;
        justify-content: center;
    }

    .main-content-welcome-child {
    //    max-height: 300px;
    //    max-width: 40%;
       padding: 0% 4%;
       display: flex;
       min-height: 300px;
       min-width: 100%;
       justify-content: center;
       align-items: center;
       border-bottom: 10px solid black;
       box-sizing: content-box;

    }

    .welcome-header {
        letter-spacing: 4px;
    }

    .real-sticky-child {
        position: sticky;
        top: 0;
        height: 350px;
    }

    .nav-sticky {
       padding: 0%;
       margin-bottom: 2px;
    }

    .nav-sticky-child {
        display: flex;
        justify-content: space-between;
        top: 0;
        background: black;
        box-shadow: 0 4px 10px -2px #C6961D;
    }

    .belch-title-div {
        padding-left: 2%;
    }

    .belch-title {
        padding-left: 2%;
        font-size: 30px;
        color: white;
    }

    .sticky-parent-1 {
        width: 80%;
         height: 100vh;
         background: rgb(34, 34, 34);
    }

    .bottom-content-container {

        margin-bottom: 200px;
        display: flex;
        align-items: center;
        flex-direction: column;

    }

    .divider {

        padding-left: 2%;
        text-align: center;
        position: relative;
        top: 0;
        height: 100px;

    }

    .sort-container {
        margin: 2%;
        color: white;
        display: flex;
        justify-content: flex-start;
        width: 60%;
    }


`;

export default StyledRestaurantPage;
