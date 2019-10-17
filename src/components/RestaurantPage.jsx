import React, { useContext, useEffect, useState, Component } from "react";
import axios from "axios";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledRestaurantPage from "../styles/StyledRestaurantPage";
import Collapsible from 'react-collapsible';


function RestaurantPage({ match }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);
    const [selectedRestaurant, setselectedRestaurant] = useState(false);
    const [selectedResMenu, setselectedResMenu] = useState([]);
    const [search, setSearch] = useState('')
    const [firstRender, setFirstRender] = useState(true);
    console.log(match)

    const handleClick = (target) => {
        setFirstRender(false)
        setselectedRestaurant(target)
        setselectedResMenu(target.menuItems)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value.substr(0, 25))
    }

    let filteredRestaurants = restaurants.filter(
        (res) => {
            return res.name.toLowerCase().includes(search.toLowerCase());
        }
    )
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
                                        <h1 className="welcome-header">Where are you eating today?</h1>
                                        {/* <p style={{ color: "white" }}>We'll let you know the best item to order on the menu.</p> */}
                                        <div style={{ background: "black", width: "100%" }}>
                                            <div className="restaurants-header">
                                                <div className="restaurant-h1">
                                                    <input type="text" value={search} onChange={updateSearch} className="restaurant-h1" placeholder="Search" style={{ fontSize: "26px", margin: 0, padding: 0, border: "none" }} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                :

                                <div className="main-content-welcome" >
                                    <div className="main-content-welcome-child" style={{ paddingTop: 0 }}>
                                        <h1 className="welcome-header-rendered" style={{}}>{selectedResMenu[0].name} {console.log(selectedResMenu[0].name)}</h1>
                                        <div className="rendered-child-image-div">
                                            <img className="rendered-child-image" src={selectedResMenu[0].image} />
                                        </div>
                                        {/* <p style={{ color: "white" }}>Best item at {selectedRestaurant.name}</p> */}
                                        <div className="search-bar-container" style={{ background: "black", width: "100%", marginTop: "1%" }}>
                                            <div className="restaurants-header">
                                                <div className="restaurant-h1">
                                                    <input type="text" value={search} onChange={updateSearch} className="restaurant-h1" placeholder="Search" style={{ fontSize: "26px", margin: 0, padding: 0, border: "none" }} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                        }
                    </div>
                </div>

                <div className="restaurant-list-container" >
                    <div className="sticky-parent-1">
                        <div className="divider"></div>

                        <div className="bottom-content-container">


                            <div className="sort-container">
                                <div style={{ display: "flex" }}>
                                    {/* <h3 style={{ paddingTop: "1%"}}>Sort By:</h3>
                                    <h3 style={{ paddingTop: "2%", paddingLeft:"2%", fontSize:"16px", width: "500px"}}>Highest Rated - Lowest Rated - Most Popular</h3> */}
                                </div>
                            </div>



                            {filteredRestaurants.map(restaurant => (

                                <div onClick={() => handleClick(restaurant)} className="restaurant-card" key={restaurant.id}>

                                    <div className="restaurant-content" >
                                        <div className="restaurant-name-top">
                                            <div className="top-left-divider" style={{ flex: 1 }}></div>
                                            <div className="restaurant-name-top-header">
                                                <Link style={{}} to={`/restaurant_page/${restaurant.id}`}>{restaurant.name}
                                                </Link>
                                            </div>

                                            <h2 className="restaurant-price"> $$ </h2>
                                        </div>

                                        <div className="restaurant-inner-content">
                                            <div>
                                                <h3 className="restaurant-cuisine-text">{restaurant.cuisine}</h3>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", }}>
                                                <Link style={{ color: "black", paddingBottom: "1%" }} to={`/restaurant_page/${restaurant.id}/${restaurant.menuItems[0].id}`}>
                                                    <h3 className="restaurant-reviews-text">{restaurant.total_reviews} Reviews</h3>
                                                </Link>
                                            </div>

                                            <Collapsible triggerStyle={{
                                                display: "flex", alignItems: "flex-end", flexDirection: "column", fontSize: "18px", paddingRight: "2%",
                                                width: "100%", paddingBottom: "0.5%", paddingTop: "0.5%", background: "#d7ddde"
                                            }} trigger="Best Dishes">
                                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                                                    <div className="menu-item-list-container" >
                                                        {restaurant.menuItems.slice(0, 3).map(menuItem => (
                                                            <div className="menu-item-card" style={{ width: "100%" }}>
                                                                <div className="menu-item-card-content" >
                                                                    <div className="menu-item-card-image-div"><img className="menu-item-card-image" src={menuItem.image} /></div>
                                                                    <div className="menu-item-card-details" style={{ marginRight: "23px", paddingLeft: "20px" }}>
                                                                        <Link style={{ color: "white" }} to={`/restaurant_page/${restaurant.id}/${menuItem.id}`}> <p className="menu-item-card-name" >{menuItem.name} </p> </Link>
                                                                        <div className="menu-item-card-description" >
                                                                            {menuItem.description.substr(0, 123)}..
                                                                            //
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}

                                                    </div>

                                                </div>
                                            </Collapsible>

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