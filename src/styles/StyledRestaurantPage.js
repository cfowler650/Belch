import styled from "styled-components";

const StyledRestaurantPage = styled.div`
//     .restaurant-card {
//         // width: 60%;
//         width: 50%;
//         align-items: flex-start;
//         display: flex;
//         margin: 8px;
//         // box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
//         // border-radius: 0.5%;
//         // padding: 1%;

//         min-height: 120px;
//         padding-top: 1px;
//         padding-left: 0px;
//         padding-right: 0px;
//         margin-bottom: 1%;
//         margin-top: 1%;


//     }

//     @media screen and (min-width: 1430px) {
//        .restaurant-card {
//            width: 70%
//        }
//     }

//     .restaurant-content {
//         display: flex;
//         margin: 0 10px;
//         flex-direction: column;
//         justify-content: center;
//         align-items: flex-start;
//         width: 100%;
//         padding: 0;
//         margin: 1px;
//         color: black;

//     }

//     .collapsible-title {
//             display: flex;

//     align-items: flex-end;
//     flex-direction: column;
//     font-size: 28px;

//     padding-bottom: 1.5%;
//     padding-top: 1.5%;
//     background: #d7ddde;
//     }

//     .collapsible-title .span {
//             width: 100%;
//         display: flex;
//         align-items: flex-end;
//         flex-direction: column;
//         font-size: 30px;
//         padding-right: 2%;
//         ont-size: 28px;
//         padding-bottom: 1.5%;
//         padding-top: 1.5%;
//         background: #d7ddde;
//     }
//     .restaurant-name-top{
//         background: #d7ddde;
//         width: 100%;
//         padding: 3px;
//         display: flex;
//         justify-content: space-between;
//         color: black;
//          font-size: 24px;
//         //  padding-top: 1%;
//         //  padding-bottom: 1%;
//     }
//     .restaurant-name-top-header{
//         // width: 200px;
//     font-size: 24px;
//         font-weight: bold;

//              text-align: center;

//     }
//     .restaurant-price {
//         font-size: 26px;
//         font-family: "Ribeye";
//         margin: 0px;
//         color: black;
//             flex: 1;
//     text-align: right;
//     padding: 2px;


//     }
//     .restaurant-inner-content {
//          color: black;
//          width: 100%;
//          background: white;

//              padding-top: 1%;

//     }
//     .restaurant-cuisine-text {
//         margin: 0;
//         padding-left: 12px;
//        font-size: 18px;
//     }

//     .restaurant-reviews-text {
//         margin:0;
//         padding-left: 12px;
//         padding-top: 0.5%;
//         background-color: white;
//         font-size: 18px;

//     }

//       .restaurant-distance-text {
//        margin: 0;
//        padding-right: 12px;
//        font-size: 24px;
//        outline: 0;
//     }
//     .restaurant-image {
//         max-width: 100px;
//         text-align: initial;
//     }

//     .nav-sticky {
//         padding: 0 36px 0 36px;
//         display: block;
//         top: 0px;
//         right: 0px;
//         left: 0px;
//         /* z-index: 400; */
//         // height: 400px;
//         background-color: rgb(255, 255, 255);
//         transition: background-color 0.2s ease-in-out 0s;
//         // box-shadow: 0 8px 10px -2px #C6961D;

//     }

//     .restaurant-list-container {
//         padding: 0 36px 0 36px;
//         // height: 1000px;

//         // border: 2px solid black;
//         top: 20;
//         display: flex;
//         background: black;
//         justify-content: center;
//     }

//     .main-content-rendered {
//          display: flex;
//          padding: 2%;
//          height: 300px;
//          justify-content: center;
//     }

//     .main-content-rendered-child {

//     }

//     .main-content-rendered-child-2 {
//         max-height: 400px;
//         width: 60%;
//         margin-right: 4%;
//         padding-right: 4%
//     }
//     .top-rated-dish-content {
//         // style={{ paddingLeft: "3%", flexDirection: "column", justifyContent: "space-evenly"}}
//         padding-left: 3%;
//         flex-direction: column;
//         justify-content: space-evenly;
//         display: flex; //may need to turn this off if seeing issues
//     }

//     .rendered-child-image-div {
//         display: flex;

//         max-width: 400px;
//     max-height: 243px;

//     }

//     .rendered-child-image {
//         flex: 1;
//         // max-width: 100%;
//         // max-height: 207px;
//           min-width: 250px;
//     }


//     .main-content-welcome {
//         display: flex;
//         justify-content: center;
//         // background: url('https://www.marineroom.com/resourcefiles/homeimages/the-marine-room-restaurant-in-la-jolla-top4.jpg');
//         background: url('https://ak6.picdn.net/shutterstock/videos/17127316/thumb/1.jpg');
//        background-size: cover;

//         //    padding-top: 75px;

//         background-color: rgb(0, 0, 0); /* Fallback color */
//         background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */


//     }

//      .welcome-header {
//         letter-spacing: 4px;
        // padding-bottom: 9%;
        // padding-top: 9%;
//         color: white;
//         margin: 12px;

//     }


//    @media screen and (min-width: 1500px) {
//             .welcome-header {
//                 letter-spacing: 4px;
//                 padding-bottom: 7%;
//                 padding-top: 7%;
//                 color: white;
//                 margin: 12px;

//          }

//       .rendered-child-image-div {
//           max-height: 300px;
//             max-width: 500px;
//       }

//       .rendered-child-image {
//           min-width: 300px;
//       }



//     }


//      .welcome-header-rendered {
//         letter-spacing: 4px;

//         color: white;
//         margin: 12px;

//     }

//     .main-div {
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   min-height: 100vh;
//   height: 100%;
//   width: 100%;
// }

// .global {
//   flex:
// }

// .nav {
//   width: 100%;
//   background-color: black;
//   color: white;
//   position: sticky;
//   top: 0px;
//   right: 0px;
//   left: 0px;
//   z-index: 400;
// }

// .top-content {
//   height: 100%;
//     width: 100%;
//    position: relative;
//   background-color: red;
// }

// h2 {
//   margin:0;
//   margin-bottom: 3%;
// }

// .top-content {
// /*   position: fixed; */
//   height: 308px;
//   width: 100%;
//    background-color: rgb(244, 220, 220);
// }

// .bottom-content {

//    background-color: rgb(255, 255, 255);
//    z-index: 200;
//   margin-top: 308;
//   position: relative;
// }
// .search-bar {
//   position: sticky;
//   top: 200px;
//   width: 100%;
//   height: 70px;
//   background-color: rgb(255, 255, 255);
//   z-index: 300;
// }

//     .main-content-welcome-child {

//     //    padding-top: 8%;
//        display: flex;

//        min-width: 100%;
//        justify-content: center;
//        align-items: center;

//        box-sizing: content-box;
//        flex-direction: column;

//         background-color: rgb(0, 0, 0); /* Fallback color */
//         background-color: rgba(0, 0, 0, 0.6); /* Black w/opacity/see-through */

//     }


//     .restaurants-header {
//     //        font-size: 30px;
//     // width: 100%;
//     // text-align: center;
//     // border: 1px solid black;
//     // margin-top: 20px;

//              width: 100%;
//                justify-content: center;
//                display: flex;
//     }
//     .restaurant-h1 {
//        display: flex;
//     //    width: 30%;
//        justify-content: center;
//        align-items: center;
//        text-align: center;
//        font-size: 30px;
//        color: white;
//        background:  black;
//        padding-top: 1%;
//        padding-bottom: 1%;

//     }

//     .menu-item-card-image-div {

//         min-width: 75px;
//         margin-left: 10px;
//         height: 75px;
//         margin-right: 0px;

//     }

//     .menu-item-card-image {
//         max-width: 100%;
//         max-height: 100%;
//             border: 3px solid rgb(215, 221, 222);
//     }
//     .menu-item-card-name {
//         font-size: 16px;
//         margin: 0px;
//         color: black;
//         text-transform: uppercase;
//     }
//     .menu-item-card-description {
//          font-size: 12.5px;
//     line-height: 20px;
//     }

//     .menu-item-card-content {
//         display: flex;
//         padding-bottom: 1%;
//     }
//     .menu-item-list-container {
//        display: flex;
//        align-items: center;
//        flex-direction: column;
//        padding-top: 12px;
//        width: 100%;

//     }
//         input:focus,
//     select:focus,
//     textarea:focus,
//     button:focus {
//         outline: none;
//     }
//     .restaurant-h1:before, .restaurant-h1:after {
//        content: '';
//        border-top: 2px solid;
//        margin: 0 60px 0 0;
//        flex: 1 0 20px;
//        width: 100px ;
//        color: white;
//     }
//      .restaurant-h1:after {
//        margin: 0 0 0 60px;
//     }

//     .real-sticky-child {
//         position: sticky;
//         top: 0;
//         // height: 350px;
//     }

//     .nav-sticky {
//        padding: 0%;
//     //    margin-bottom: 2px;
//     }

//     .nav-sticky-child {
//         display: flex;
//         justify-content: space-between;
//         top: 0;
//         background: black;
//         box-shadow: 0 4px 10px -2px #C6961D;
//     }

//     .belch-title-div {
//         padding-left: 2%;
//     }

//     .belch-title {
//         padding-left: 2%;
//         font-size: 26px;
//         color: white;
//     }

//     .sticky-parent-1 {
//         width: 70%;

//          background: rgb(34, 34, 34);
//     }

//     .bottom-content-container {
//         padding-top: 2px;
//         margin-bottom: 200px;
//         display: flex;
//         align-items: center;
//         flex-direction: column;


//     }

//     .divider {

//         padding-left: 2%;
//         text-align: center;
//         position: relative;
//         top: 0;
//         // height: 100px;

//     }

//     .sort-container {
//         // margin: 2%;
//         color: white;
//         display: flex;
//         width: 60%;


//     }


* {



}

h1 {
  margin: 0;

}

.nav-container {
  background: black;

}

.nav-1-2{
  position: sticky;
  top: 0px;
  height: 300px;
//   border: 1px solid red;
    // background: url('https://ak6.picdn.net/shutterstock/videos/17127316/thumb/1.jpg');
    // background-size: cover;
}

.img-div {
    z-index: 1;
    position: fixed;
    bottom: 40%;

    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

 .welcome-header {
        letter-spacing: 4px;
        // padding-bottom: 9%;
        // padding-top: 9%;
        color: white;
        margin: 12px;

    }

.header-img {
    width: 100%;
    max-height: 500px;
    z-index: 1;
    position: relative;
    object-fit: cover;
}

// testing::after {
//    content: ""; // ::before and ::after both require content
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(120deg, #eaee44, #33d0ff);
//     opacity: .7;
// }
.nav-main {
   box-content: border-box;
  border: 1px solid black;
  position: sticky;
  top: 55px;

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


    .nav-flex {
        display: flex;
    /* width: 100%; */
    justify-content: space-between;
    background: black;
    padding-left: 128px;
    padding-top: 1%;
    }

    .h1-belch {
        background: black;
    /* padding: 1% 128px; */
    color: white;
    font-size: 22px;
    /* width: 50px; */
    width: 100%;
    }
.belch-header {
        padding: 1% 0px;
    font-size: 26px;
    background: black;
    color: white;

}

.header-text-div{
    position: absolute;
    color: white;
    width: 100%;
    z-index: 2;
    display:flex;
    justify-content: center;
}

.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding-bottom: 64px;
    padding-top: 0px;
    background: black;

}
.content-test {

    border: 1px solid black;
    width: 420px;
    height: 300px;
    margin-left: 20px;
    margin-right: 20px;

}

.img-test {


    width: 317px;
    height: 193px;
     object-fit: cover;


}

 .belch-title {
       padding-left: 100px;
       padding-top: 13px;
         font-size: 22px;
        color: white;
        margin: 0;

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


.content-diver {
//    margin-top: 18px;
//    margin-bottom: 18px;
//    margin-left: 12px;
//    margin-right: 25px;

margin: 12px 12px 40px 26px;
}

.outer-container {
  padding-left: 100px;
  padding-right: 100px;
}


.outer-container {
    background: black;
}

.search-bar {
    background: black;
    color: white;
    font-size: 18px;
    // padding-bottom: 2.5%;
    // width: 400px;


}

input:focus {
    outline-width: 0px;
}
`;

export default StyledRestaurantPage;
