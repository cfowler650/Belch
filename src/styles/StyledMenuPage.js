import styled from "styled-components";

const StyledMenuPage = styled.div`
    // display: flex;
    // overflow: hidden;
    // color: black;
    // background: #222;


    h1 {
        margin: 0;
    }


        .background {

           background: url('https://ak6.picdn.net/shutterstock/videos/17127316/thumb/1.jpg');
            background-size: cover;
            z-index: -1;
            width: 100%;
            margin: 0;

        }
        .behind {
        // margin-top: 500px;

        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

        }
    .belch-title-div {
        background-color: black ;
        color: white;
    }

    .belch-title {
        font-size: 26px;
        color: white;
        margin-left: 20px;
            padding: 1% 0;
    }

    .middle-divider {
        width: 33%;
    }

    .right-divider {
        flex: 1;
    }

     .nav-links {
        display: inline-flex;
        width: 100%;
    }

    .nav-link-div {
        flex: 1;
        display: flex;
        justify-content: center;

    }

    .nav-button-link {
        background: black;
        font-size: 18px;
        color: white;
        border: none;
        text-align: center;
    }

    .sticky-container {
        // background: green;

        margin: 0;
    }

    .sticky-container-2 {
        background:  #222;
        margin: 0;
    }

    .sticky-bar {
        position: sticky;
    }

    #sticky-bar-1{
        top: 0;
    }

    #sticky-bar-2 {
        top: 4em;
    }

    .content {
        margin-bottom: 150px;
        background: yellow;
        z-index: 5;
    }

    .top-content-container-child {
        // background: url('https://ak6.picdn.net/shutterstock/videos/17127316/thumb/1.jpg');
        // background-size: cover;
        // height: 200px;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        background: white;

    }

    .res-name-container {
         background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */
           width: 100%;
        height: 100%;
        padding-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    }

    .dishes-container {
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
        max-width: 250px;
          max-height: 250px;
          min-width: 250px;
           min-width: 120px;
     max-width: 120px;
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
        font-size: 14px;
        margin: 0.5vh;
        text-align: left;
        line-height: 1.4em;
    }

    .dish-image-container {
        margin: 0;
        padding: 0;
        display: flex;
    }

    .restaurant-h1 {
         display: flex;
    //    width: 30%;
       justify-content: center;
       align-items: center;
       text-align: center;
       font-size: 30px;
       color: white;
       background:  #222;
       padding-top: 1%;
padding-bottom: 1%;

    }

`;
export default StyledMenuPage;


//     h1 {
//         font-size: 30px;
//         letter-spacing: -0.88px;
//         font-weight: 600;
//         line-height: normal;
//         opacity: 0.9;
//     }
//     .top-content-container {
//         background: url('https://ak6.picdn.net/shutterstock/videos/17127316/thumb/1.jpg');
//         background-size: cover;
//         height: 200px;
//         display: flex;
//         align-items: center;
//         justify-content: center;

//     }
    // .dish-image-container {
    //     margin: 0;
    //     padding: 0;
    //     display: flex;
    // }
//     .header-container {
//          display: flex;
//         align-items: center;
//         justify-content: center;
//         width: 100%;
//         height: 100%;
//         background-color: rgb(0, 0, 0); /* Fallback color */
//         background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */
//     }


//     .menu-page-container {
//         // text-align: center;
//         // justify-content: center;
//         width: 100%;
//         // margin: 2%;
//         // border: 2px solid blue;
//     }


//     .sticky-bar{

//         position: sticky;

//     }

//     #sticky-bar-1{
//         top: 0;
//     }

//     #sticky-bar-2{
//         top: 2em;
//           display: flex;
//         flex-direction: column;
//         align-items: center;

//     }

//      .belch-title-div {

//     }

//     .belch-title {

//         font-size: 26px;
//         color: white;
//             margin-left: 20px;
//     }

//     .menu-page-child-1 {
//         // border: 1px solid red;
//     }


//     .dishes-container {
//         // border: 2px solid darkgrey;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }

//     .dish-card {

//     width: 70%;
//     display: inline-flex;
//     margin: 2vh;

//     background-color: white;
//     box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34,25,25,0.4);
//     border-radius: 0.5%;


//     }

//     .dish-image {
//     //   max-width: 250px;
//     //     max-height: 250px;
//     //     min-width: 250px;
//           min-width: 120px;
//     max-width: 120px;
//     }


    // .dish-name-div {
    //     display: flex;
    //     padding: 0 2vh;
    //     // border: 1px solid blue;
    //     width: 100%;
    //     flex-direction: column;
    //     justify-content: center;
    //     max-height: 200px;
    // }

    // .dish-detail {
    //     color: black;
    //     // font-size: 16px;
    //     font-size: 14px;
    //     margin: 0.5vh;
    //     text-align: left;
    //     line-height: 1.4em;
    // }
//     .nav-button-link {
//         background: black;
//         font-size: 18px;
//         color: white;
//         border: none;
//         /* background: yellow; */

//         // padding: 0% 4%;
//         // width: 80px;
//         text-align: center;

//     }

//     .nav-link-div {
//         //   border-right: 2px solid #222;
//     }
//       .nav-button-link-borderless {
//         background: black;
//         font-size: 18px;
//         color: white;
//         border: none;
//         /* background: yellow; */

//         // padding: 0% 4%;
//         box-sizing: content-box;

//     }

//     .right-divider {
//             display: flex;
//     align-items: center;
//     }


// .nav-links {
//  display: inline-flex;
// width: 100%;

// }

//     .dish-name-h2 {
//         margin: 0px;
//         padding: 0px;
//         font-size: 21px;
//         letter-spacing: -0.88px;
//         font-weight: 600;
//         line-height: normal;

//     }

//     a {
//         padding: 0px;
//         margin: 0px;
//     }

//     @media only screen and (max-width: 420px) {


//             .dish-image {
//                 max-width: 150px;
//             }

//             .dish-card {
//                 width: 80%;
//             }

//             .dish-detail {

//                 font-size: 12px;

//             }

//             .dish-name-h2 {
//                 font-size: 16px;

//             }
//         }


    // }
