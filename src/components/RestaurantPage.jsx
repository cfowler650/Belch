import React, { useContext, useEffect, useState, Component } from "react";
import axios from "axios";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledRestaurantPage from "../styles/StyledRestaurantPage";



    const MainContent = ({ selectedRestaurant }) => {

        return (
            <>
                {
                    selectedRestaurant

                    ?

                        <div className="main-content-rendered">
                            <div className="main-content-rendered-child">
                                <div className="rendered-child-image-div">
                                    <img className="rendered-child-image" src={selectedRestaurant.image} />
                                </div>
                            </div>

                            <div className="main-content-rendered-child-2">
                                <div className="top-rated-dish-content">
                                    {
                                        selectedRestaurant.menuItems !== undefined

                                        ?

                                        <>
                                            <h3> Top Dish At {selectedRestaurant.name}</h3>
                                            <h1>{selectedRestaurant.menuItems[0].name}</h1>
                                            <h3 style={{ fontSize: "16px" }}>{selectedRestaurant.menuItems[0].description}</h3>
                                        </>

                                        :

                                        <p></p>
                                    }
                                </div>
                            </div>
                        </div>

                    :

                        <div className="main-content-welcome" style={{  }}>
                            <div className="main-content-welcome-child" style={{ }}>
                                <h1 style={{ letterSpacing: "4px" }}>Welcome to Belch, choose a restaurant to get started</h1>
                            </div>
                        </div>
                }
            </>
        );

    }

    function RestaurantPage({ match }) {
        const [data, setData] = useContext(RestaurantContext);
        const [selectedRestaurant, setselectedRestaurant] = useState(false);
        const [firstRender, setFirstRender] = useState(true);

        const handleDishSelect = (e) => {
            let dish = data.restaurants.find(restaurant => restaurant.id === parseInt(e.target.id))
            setTimeout((e) => {
                if (firstRender == true) {
                    setFirstRender(false)
                }

                setselectedRestaurant({ ...selectedRestaurant }); //this pretty much fixed the random undefines
                setselectedRestaurant(dish);
            }, 200)
        };


        return (
            <StyledRestaurantPage>
                <div className="real-sticky">
                    <div className="real-sticky-child">
                        <div className="nav-sticky">
                            <div className="nav-sticky-child">
                                <div className="belch-title-div">
                                    <Link to={'/'}><h1 className="belch-title"> Belch </h1></Link>
                                </div>
                            </div>


                            {
                                firstRender == true

                                ?

                                <div className="main-content-welcome" >
                                    <div className="main-content-welcome-child">
                                        <h1 className="welcome-header">Welcome to Belch, choose a restaurant to get started</h1>
                                    </div>
                                </div>

                                :

                                <MainContent selectedRestaurant={selectedRestaurant} />

                            }
                        </div>
                    </div>

                    <div className="restaurant-list-container" >
                        <div className="sticky-parent-1">
                            <div className="divider"></div>

                            <div className="bottom-content-container">


                                <div className="sort-container" >
                                    <div>
                                        <h1>Sort By:</h1>
                                        <h3>Highest Rated, Lowest Rated </h3>
                                    </div>
                                </div>


                                {data.restaurants.map(restaurant => (

                                    <div onClick={handleDishSelect} id={restaurant.id} className="restaurant-card" key={restaurant.id}
                                        style={{ }}>


                                        <div className="restaurant-content" >
                                            <div className="restaurant-name-top">
                                                <div className="restaurant-name-top-header">
                                                    {restaurant.name}
                                                </div>
                                                <h2 className="restaurant-price"> $$ </h2>
                                            </div>

                                            <div className="restaurant-inner-content">

                                                <div>
                                                    <h3 className="restaurant-cuisine-text">American Cuisine</h3>
                                                </div>

                                                <div style={{display: "flex", justifyContent: "space-between", }}>

                                                    <h3 className="restaurant-reviews-text">3000 Reviews</h3>

                                                    <p className="restaurant-distance-text">10 miles from you</p>

                                                </div>

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


export default RestaurantPage;

