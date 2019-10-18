import styled from "styled-components";

const StyledHomePage = styled.div`
    .bg-image-div {

        border: 10px solid black;
        background-size: cover;
        display: block;
        left: -5px;
        top: -5px;
        bottom: -5px;
        position: fixed;
        right: -5px;
        z-index: 1;
        filter: blur(5px);
        // background-color: rgb(0, 0, 0); /* Fallback color */
        // background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    }

    .login-container {
            display: inline-flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    }

    .auth-input-field {

            margin: 3% 0px;
            min-width:0;

            flex: 1;
            padding: 3%;
            font-size: 1em;
                width: 100%;
    }

    .email-h5 {
        margin: 0;

    // font-size: 0.8em;
        font-weight: 600;
    text-transform: uppercase;
        font-size: 12px;
    line-height: 16px;

    text-align: left;
    }

    .sign-up-header {
        font-size: 30px;
        margin: 12px;
    }
    .guest-button {
        display: flex;
        justify-content: center;
        padding: 0px;
        margin: 0px;
        margin-top: 9px;
    }

    }
    //black gradient over image control..
    .bg-image-div::after {
        background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.3) 0,
            #000 92%
        );

        left: 0px;
        top: 0px;
        bottom: 0px;
        position: absolute;
        right: 0px;
        height: 102vh;
        width: 104vw;
        content: "";
    }

    .bg-image {
         width: 100vw;
         height: 100vh;
    }


    //this is control of actual modal
    .bg-text {
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.2); /* Black w/opacity/see-through */
        color: white;
        font-weight: bold;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;

        padding: 20px;
        text-align: center;

        width: 27%;
    }

    a:link {
        text-decoration: none;
        color: white;
    }

    a:visited {
        text-decoration: none;
        color: white;
    }

    .belch-nav-title{
        z-index: 2;
        position: absolute;
        top: 0%;
        left: 0%;
        padding-left: 2%;
        padding-top: 1%;
        width: 100vw;
        font-size: 30px;
        color: white;
        // text-align: center;
    }

    .login-nav-title {
        z-index: 2;
        position: absolute;
        padding-left: 94%;
        padding-top: 1%;
        width: 50vw;
        height: 10vh;
        font-size: 24px;
        color: white;
    }


    //everything below 600px (phones)
    @media screen and (max-width: 600px) {
        .belch-nav-title {
            padding-left: 0%;
            text-align: center;
        }
        .bg-text {
            width: 80%;
        }

        .bg-image {
            width: auto;
        }

        .login-nav-title {
            display:none;
        }
    }


    //ipads
     @media screen and (min-width: 700px) {
         .bg-text {
            width: 50%;
        }
    }

    //everything macbook
    @media screen and (min-width: 1100px) {
        .bg-text {
            width: 33%;
        }
    }

    //desktop
    @media screen and (min-width: 1500px) {
        .bg-text {
            width: 25%;
        }
    }

    //bigger desktop+
    @media screen and (min-width: 1900px) {
        .bg-text {
            width: 20%;
        }
    }

    //giant screens+
    @media screen and (min-width: 2200px) {
        .bg-text {
            width: 16%;
        }
    }

    @media screen and (min-width: 2800px) {
        .bg-text {
               width: 14%;
        }
    }


    // @media screen and (min-width: 400px, max-width: 595px){
    //      .bg-text {
    //         width: 56%;
    //     }
    //     .login-nav-title {
    //         padding-left: 90%;
    //     }
    // }



}
`;

export default StyledHomePage;
