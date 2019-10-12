import styled from "styled-components";

const StyledRestaurantPage = styled.div`
    // .restaurant-list-container {
    //     display: flex;
    //     align-items: center;
    //     flex-direction: column;
    // }

    // .restaurant-card {
    //     display: flex;
    //     justify-content: center;
    //     box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
    //     border-radius: 0.5%;
    //     width: 600px;
    //     margin-bottom: 2%;
    //     padding-bottom: 4%;
    // }

    // .restaurant-image {
    //     max-width: 400px;
    // }

    .sticky-container {
        /* display: block;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 400;
    letter-spacing: 0.14px;
    background-color: #e3e3e3;
    height: 72px;
    */
        padding: 0 36px 0 36px;
        display: block;
        position: relative;
        top: 0px;
        right: 0px;
        left: 0px;
        /* z-index: 400; */
        height: 332px;
        background-color: rgb(255, 255, 255);
        transition: background-color 0.2s ease-in-out 0s;
    }

    .sticky-child {
        //this max width controls overall width of navbar
        max-width: 100%;
        display: flex;
        /* min-height: 72px; */
        /* position: sticky; */
        width: 100%;
        margin: 0px auto;
        transition: min-height 0.2s ease-in-out 0s;
        /* z-index: 1; */

        padding-left: 16px;
        padding-right: 16px;
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        z-index: 400;
        background-color: #fff;
        transition: background-color 0.2s ease-in-out;
    }

    .img-container-div {
        position: fixed;
        width: 100%;
        height: 260px;
        margin-top: -260px;
        background-color: rgb(247, 247, 248);
        overflow: hidden;
    }

    .img-itself {
        /* position: absolute; */
        position: absolute;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: opacity 0.4s linear;
        transition: opacity 0.4s linear;
    }
    .global {
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    // .collision-top {
    //     position: sticky;
    //     top: 0px;
    //     width: 100%;
    //     height: 70px;
    //     background-color: #fff;
    //     border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    //     z-index: 300;
    // }

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

    .search-bar-container {
        position: relative;
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        flex: 1 1 auto;
    }

    .search-bar {
        -webkit-appearance: none;
        font-size: 16px;
        letter-spacing: 0.14px;
        font-weight: 400;
        font-family: inherit;
        width: 100%;
        caret-color: rgb(0, 0, 0);
        color: rgb(45, 49, 56);
        -webkit-box-flex: 1;
        flex-grow: 1;
        line-height: normal;
        opacity: 1;
        max-width: 380px;
        background-color: inherit;
        box-shadow: none !important;
        border-radius: 0px;
        padding: 16px;
        transition: opacity 50ms ease-in-out 0s;
        border: 0;
    }

    nav-div-1-child-1 {
        display: flex;
        -webkit-box-flex: 1;
        flex-grow: 1;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        width: auto;
        min-height: 70px;
    }
`;

export default StyledRestaurantPage;
