import styled from "styled-components";

const StyledDishPage = styled.div`
    .dish-page-container {
        // border: 2px solid gray;
            text-align: center;
    background-color: #222;
    position: absolute;
    top: 60px;
    bottom: 20px;
    width: 100%;
    }
    .dish-container {
        padding-bottom: 3%;
             background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */
    }
    .dish-button-group {

        width: 40%;
        button {
            width: 140px;
            height: 45px;
            font-family: "hind";
            font-weight: "bold";
            font-size: 18px;
            // margin-right: 10px;
            background: #1D7C7F;
            border: none;
            margin-right: 20px;
            color: white;
        }

        display: flex;
         justify-content: center;
         align-items: center;
         background: black;

    }

    .footer {
        height: 20px;
        background-color: #222;
        position: fixed;
        bottom: 0;
        width:100%;
        color: #222;
    }

    button:focus {


    outline: none !important;
    // border-bottom: 1px solid red;
    // box-shadow: 0 0 2px #719ECE;
    box-shadow: 0 4px 2px -2px #719ECE;
    }

    // .sort-button-group::before {
    //     content: "|";
    //     padding: 0px 1%;
    //     color: white;
    //     position: relative;
    //     // top: 0;
    //     // left: 0;
    // }

    .sort-section-container {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

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
        max-width: 300px;
        min-height: 150px;
        max-height: 225px;
    }

    .avatar-image-review {
        max-width: 100px;
        text-align: initial;
    }


    .left-arrow {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 3%;
    }


    .menu-btn {
        background: black;
    outline: none;
    border: none;
    color: white;
    font-size: 16px;
    }
    .right-arrow {

        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 3%;

    }

    .flex-box {
            display: flex;
    justify-content: space-evenly;
    }


    .test {
        background: url(https://ak6.picdn.net/shutterstock/videos/17127316/thumb/1.jpg);
    background-size: cover;
    }

    .nav-bar{
        display: flex;
        top: 0;
        background: black;
        // box-shadow: 0 4px 10px -2px #C6961D;
         position: sticky;
        top: 0px;
        height: 300px;
    }
     .belch-title-div {
        // padding-left: 2%;

    }

    .belch-title {
       padding-left: 100px;
       padding-top: 13px;
    font-size: 22px;
        color: white;
        margin: 0;

    }

    .menu-btn-div {
        padding-top: 18px;
    background: black;
    }

    p {
        margin-top: 0px;
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
        background: black;
        color: white;
        border: 1px solid #222;
    }

    .review-content {
        display: flex;
        margin: 0 10px;
        flex-direction: column;
        // justify-content: center;
        align-items: flex-start;
        width: 100%;
    }

    .dish-name-h1{
        color: white;
        margin: 0px;
        padding-top: 1.5%;
        padding-bottom: 1.5%
    letter-spacing: 4px;


    }

    .bottom-content-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        text-align: initial;
        // border: 3px solid blue;
        // box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
        border-radius: 0.5%;
        background: #222;
    }

    .bottom-content-child {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: black;
    }

    .reviews-generator-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        text-align: initial;
        // border: 3px solid black;
    }
`;

export default StyledDishPage;
