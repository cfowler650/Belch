import React, { useContext, useEffect, Component } from "react";
import axios from "axios";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledRestaurantPage from "../styles/StyledRestaurantPage";

function RestaurantPage({ match }) {
    const [data, setData] = useContext(RestaurantContext);

    return (
        <StyledRestaurantPage>
            <div className="real-sticky">
                <div
                    className="real-sticky-child"
                    style={{
                        position: "sticky",
                        top: 0,
                        height: "350px",
                        border: "4px solid blue"
                    }}
                >
                    <div
                        className="nav-sticky"
                        style={{ padding: "0%", marginBottom: "2px" }}
                    >
                        <div
                            classNAme="nav-sticky-child"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                // position: "sticky",
                                top: 0
                            }}
                        >
                            <div
                                className="belch-title"
                                style={{
                                    paddingLeft: "2%"
                                }}
                            >
                                <h1
                                    style={{
                                        paddingLeft: "2%"
                                    }}
                                >
                                    Belch
                                </h1>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "60%",
                                    paddingRight: "2%"
                                }}
                            >
                                <h1>Menu</h1>
                                <h1>Account</h1>
                            </div>
                        </div>

                        <div
                            className="main-content-container"
                            style={{
                                display: "flex",
                                borderTop: "2px solid black"
                            }}
                        >
                            <div
                                style={{
                                    maxHeight: "400px",
                                    maxWidth: "40%",

                                    display: "flex",
                                    padding: "0% 4%"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        maxWidth: "600px"
                                    }}
                                >
                                    <img
                                        style={{
                                            flex: 1,
                                            maxWidth: "100%"
                                        }}
                                        src="./images/burger.jpg"
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    maxHeight: "400px",
                                    width: "60%",
                                    border: "2px solid blue"
                                }}
                            >
                                Content2
                            </div>
                        </div>

                        <div
                            style={{
                                textAlign: "center",
                                border: "1px solid red",
                                background: "white"
                            }}
                        >
                            <h1 style={{}}>restaurants</h1>
                        </div>
                    </div>
                </div>

                <div
                    className="restaurant-list-container"
                    style={{ display: "flex" }}
                >
                    <div className="sticky-parent-1" style={{ width: "100%" }}>
                        <div
                            style={{
                                paddingLeft: "2%",
                                textAlign: "center",
                                position: "relative",
                                top: 0,
                                height: "100px"
                            }}
                        ></div>

                        <div
                            style={{
                                marginBottom: "200px",

                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            {data.restaurants.map(restaurant => (
                                <div className="restaurant-card">
                                    <Link
                                        to={`restaurant_page/${restaurant.id}`}
                                    >
                                        <img
                                            className="restaurant-image"
                                            src={restaurant.image}
                                        />
                                    </Link>
                                    <div className="restaurant-content">
                                        <div style={{ width: "500px" }}>
                                            {restaurant.name}
                                            blablalblablalba
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </StyledRestaurantPage>
    );
}

/*



   <>
            <div className="global" style={{ backgroundColor: "orange" }}>
                <div className="img-container-div">
                    <div
                        className="img-itself"
                        style={{
                            backgroundImage:
                                "url(https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com%2Ffaec99d5-27b4-48dd-b860-5f868e2bb4f0%2Forig.png&quality=85&w=1500&h=0&mode=auto&format=webp&v=4)"
                        }}
                    >
                        {""}
                    </div>
                </div>

                <div style={{ position: "absolute", backgroundColor: "white" }}>
                    <div className="collision-top">
                        <h1> COLLISION </h1>
                    </div>
                </div>
            </div>
        </>


<div className="app-child-div">
    <Nav />
    <Global />
</div>




  <div className="sticky-container">
            <div className="sticky-child" style={{ position: "sticky" }}>
                <div className="nav-div-1-child-1">
                    <a style={{ marginRight: "24px" }}>
                        <h1
                            style={{
                                margin: 0,
                                paddingTop: 0,
                                paddingBottom: "2px",
                                paddingRight: 0,
                                paddingLeft: 0,
                                marginRight: "10px",
                                fontFamily: "Comic Sans MS"
                            }}
                        >
                            BELCH
                        </h1>
                        <svg width="106" height="32" viewBox="0 0 106 32">
                            <title>Belch</title>
                            <path d="M6.506 8.115v5.32h3.938c1.252 0 2.26-1.27 2.26-2.67 0-1.404-1.008-2.65-2.26-2.65H6.506zM4 21.672V6h6.555c2.82 0 4.654 2.07 4.654 4.764 0 2.738-1.84 4.764-4.66 4.764h-4.05v6.144H4zM27.854 18.355c.806-.156 1.59-.312 2.372-.445.156.89.693 1.96 2.505 1.96.41 0 2.4-.157 2.4-1.582 0-2.693-6.93.09-6.93-4.74 0-1.916 1.93-3.363 4.34-3.363 2.42 0 4.48 1.002 4.81 3.518-.8.133-1.58.29-2.37.445-.15-1.403-1.03-1.915-2.37-1.915-1.18 0-1.99.624-1.99 1.314 0 .912.85 1.157 2.2 1.29 2.55.268 4.72.824 4.72 3.45 0 2.36-2.08 3.607-4.79 3.607-2.9 0-4.56-1.513-4.87-3.54M38.15 12.233v-1.825h1.948v-3.25h2.416v3.25h2.35v1.825h-2.35v6.39c0 .89.27 1.157 1.052 1.157.335 0 1.074-.045 1.074-.045v1.937s-.865.09-1.723.09c-2.126 0-2.82-1.136-2.82-3.296v-6.233h-1.946zM53.278 15.394c0-1.714-.38-3.16-2.192-3.16-1.723 0-2.193 1.446-2.193 3.16v6.278h-2.416V10.408h2.192l.22 1.224c.33-.623 1.68-1.447 3-1.447 1.88 0 2.77 1.024 3.15 1.692.6-1.002 2.08-1.692 3.4-1.692 3.09 0 4.03 1.87 4.03 5.21v6.277h-2.4v-6.278c0-1.692-.47-3.183-2.2-3.183-1.81 0-2.2 1.45-2.2 3.19v6.28h-2.418V15.4zM71.58 17.31v-.558h-2.66c-1.992 0-2.395 1.002-2.395 1.558 0 .757.515 1.56 1.99 1.56 1.97 0 3.066-1.337 3.066-2.56m-4.72-3.03c-.78-.132-1.58-.31-2.39-.444.25-2.493 2.31-3.65 4.68-3.65 3.2 0 4.86 1.558 4.86 4.63v3.917c0 .668.14 1.047.61 1.047.18 0 .47-.045.58-.09v1.96c-.69.178-1.14.178-1.43.178-1.16 0-1.79-.69-1.97-1.603-.45.556-1.63 1.625-3.53 1.67-2.62 0-4.182-1.447-4.182-3.585 0-1.758 1.633-3.36 4.61-3.36h2.907v-.67c0-.867-.355-2.047-2.435-2.047-1.39 0-2.24.69-2.283 2.048M21.096 12.43c-2.01 0-3.645 1.628-3.645 3.628s1.64 3.627 3.65 3.627 3.65-1.627 3.65-3.627c0-2-1.63-3.627-3.64-3.627m0 9.49c-3.24 0-5.88-2.62-5.88-5.85s2.64-5.86 5.89-5.86 5.88 2.63 5.88 5.86c0 3.23-2.64 5.86-5.882 5.86M89.705 14.95c-.067-1.67-.873-2.738-2.528-2.738-1.61 0-2.528 1.336-2.596 2.738h5.13zm.515 2.805c.738.2 1.476.423 2.215.646-.515 1.63-2.06 3.5-5.146 3.5-3.11 0-5.33-2.38-5.33-5.85 0-3.47 2.06-5.85 5.21-5.85 3.13 0 5.1 2.1 5.1 5.5 0 .34 0 .69-.05 1.07h-7.77c.04 1.65 1.18 3.12 2.82 3.12 1.18 0 2.34-.55 2.93-2.11zM93.33 18.356c.805-.156 1.588-.31 2.37-.445.158.9.695 1.96 2.507 1.96.403 0 2.394-.15 2.394-1.58 0-2.69-6.93.09-6.93-4.74 0-1.91 1.93-3.36 4.34-3.36 2.42 0 4.48 1 4.81 3.52-.8.14-1.59.29-2.37.45-.15-1.4-1.03-1.91-2.37-1.91-1.18 0-1.99.63-1.99 1.32 0 .918.85 1.16 2.2 1.29 2.55.27 4.72.83 4.72 3.45 0 2.36-2.08 3.61-4.78 3.61-2.91 0-4.56-1.51-4.88-3.54M74.826 12.233v-1.825h1.947v-3.25h2.416v3.25h2.34v1.825h-2.35v6.39c0 .89.27 1.157 1.05 1.157.33 0 1.07-.045 1.07-.045v1.937s-.87.09-1.72.09c-2.13 0-2.82-1.136-2.82-3.296v-6.233h-1.95z"></path>
                        </svg>
                    </a >
                    <div>
                        <div>
                            <div className="search-bar-container">
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <path
                                        d="M11.75 10.335l3.32 3.322-1.413 1.414-3.322-3.32A6.48 6.48 0 0 1 6.5 13a6.5 6.5 0 1 1 5.25-2.665zM6.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
                                        fill="currentColor"
                                        opacity=".9"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                                <input
                                    className="search-bar"
                                    placeholder="Search for anything..."
                                ></input>
                            </div>
                        </div>
                    </div>
              </div >
                    <div className="nav-div-1-child-2">
                        <div>
                            <a className="food">FOOD</a>
                        </div>
                        <div className="log-in-div">Log In</div>
                        <div className="sign-up-div">Sign Up</div>
                    </div>
                 </div >
        </div >






*/
export default RestaurantPage;

{
    /* <div
                className="restaurant-page-container"
                style={{ textAlign: "center" }}
            >
                <h1>Restaurant Page</h1>

                <div className="restaurant-list-container">
                    {data.restaurants.map(restaurant => (
                        <div className="restaurant-card">
                            <Link to={`restaurant_page/${restaurant.id}`}>
                                <h2> {restaurant.name} </h2>
                                <img
                                    className="restaurant-image"
                                    src={restaurant.image}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div> */
}
