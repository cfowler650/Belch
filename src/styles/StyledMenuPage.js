import styled from "styled-components";

const StyledMenuPage = styled.div`
    display: flex;
    // overflow: hidden;
    // color: black;
    background: #222;

    h1 {
        font-size: 30px;
        letter-spacing: -0.88px;
        font-weight: 600;
        line-height: normal;
        opacity: 0.9;
    }
    .top-content-container {
        background: url('https://ak6.picdn.net/shutterstock/videos/17127316/thumb/1.jpg');
        background-size: cover;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  .dish-image-container {
      margin: 0;
    padding: 0;
    display: flex;
  }
    .header-container {
      display: flex;
    align-items: center;
    justify-content: center;
width: 100%;
    height: 100%;
      background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */
    }
    .menu-page-container {
        // text-align: center;
        // justify-content: center;
        width: 100%;
        margin: 2%;
        // border: 2px solid blue;
    }


    .nav-bar{
        display: flex;

        top: 0;
        background: black;
        // box-shadow: 0 4px 10px -2px #C6961D;
    }
     .belch-title-div {
    padding-left: 2%;
    }

    .belch-title {
        padding-left: 2%;
        font-size: 26px;
        color: white;
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

    width: 70%;
    display: inline-flex;
    margin: 2vh;

    background-color: white;
    box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34,25,25,0.4);
    border-radius: 0.5%;


    }

    .dish-image {
    //   max-width: 250px;
    //     max-height: 250px;
    //     min-width: 250px;
        min-width: 200px;
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
        // font-size: 16px;
        font-size: 16px;
        margin: 0.5vh;
        text-align: left;
    }

    .dish-name-h2 {
        margin: 0px;
        padding: 0px;
        font-size: 21px;
        letter-spacing: -0.88px;
        font-weight: 600;
        line-height: normal;

    }

    a {
        padding: 0px;
        margin: 0px;
    }

    @media only screen and (max-width: 420px) {


            .dish-image {
                max-width: 150px;
            }

            .dish-card {
                width: 80%;
            }

            .dish-detail {

                font-size: 12px;

            }

            .dish-name-h2 {
                font-size: 16px;

            }
        }
    }
`;
export default StyledMenuPage;
