import styled from "styled-components";

const StyledHomePage = styled.div`
    .bg-image-div {
        background-image: linear-gradient(to top, #f00, #00f);

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
    }

    //this is control of actual modal
    .bg-text {
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.2); /* Black w/opacity/see-through */
        color: white;
        font-weight: bold;
        border: 3px solid #f1f1f1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        width: 40%;
        padding: 20px;
        text-align: center;
        height: 40vh;
        width: 45vw;
    }

    a:link {
        text-decoration: none;
        color: white;
    }

    a:visited {
        text-decoration: none;
        color: white;
    }
`;

export default StyledHomePage;
