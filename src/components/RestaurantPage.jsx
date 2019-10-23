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
    // const [firstRender, setFirstRender] = useState(true);
    console.log(match)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleClick = (target) => {
        // setFirstRender(false)
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

            <div className="nav-container">
                <div className="nav-1-2" style={{ zIndex: "3" }}>
                    <Link to={"/"}> <h1 style={{ background: "black", padding: '1% 100px', color: "white", fontSize: "22px" }}>Belch</h1> </Link>
                </div>

                <div className="img-div" style={{ background: "" }}>
                    <div className="header-text-div" >
                        <h1 className="welcome-header" style={{ paddingBottom: 0 }}>Where are you eating today?</h1>
                    </div>
                    <img className="header-img" src="https://ak6.picdn.net/shutterstock/videos/17127316/thumb/1.jpg" />
                </div>

                <div className="nav-container" style={{ zIndex: "2", position: "relative" }}>
                    <div className="nav-main">
                        <h1 style={{ background: "black", color: "white", padding: "0.5%", paddingLeft: "100px", fontSize: "24px" }}>Restaurants</h1>
                    </div>

                    <div className="outer-container">
                        <div className="inner-container">
                            <div className="flex-container" >


                                {filteredRestaurants.map(restaurant => (

                                    <div onClick={() => handleClick(restaurant)}>
                                        <Link to={`/restaurant_page/${restaurant.id}`} style={{ cursor: "pointer" }}>
                                            <div className="content-diver">
                                                <img src={restaurant.image} className="img-test" />
                                                <div className="res-content">
                                                    <h3 style={{ margin: 0, padding: 0, paddingTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "16px" }}>

                                                        {restaurant.name}

                                                        <span> <div style={{ fontFamily: 'Ribeye' }}> $$ </div> </span>

                                                    </h3>

                                                    <div>
                                                        <span style={{ fontSize: "14px" }}>{restaurant.cuisine} </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </Link>

                                    </div>

                                ))}


                            </div>
                        </div>
                    </div>
                    {/* {filteredRestaurants.map(restaurant => (

                        <div onClick={() => handleClick(restaurant)} className="restaurant-card" key={restaurant.id} style={{ cursor: "pointer" }}>

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
                                                    <div className="menu-item-card" style={{ width: "100%" }} key={menuItem.id}>
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

                    ))} */}
                </div>

            </div>








            {/* <div className="main-div">
                <div className="nav">
                    <Link to={'/'} style={{ color: "white" }}><h1> Belch </h1></Link>
                </div>
                <div className="global">
                    <div className="header">
                        <div className="top-content">

                            <div>
                                <h1 className="welcome-header">Where are you eating today?</h1>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="search-bar">
                            <div>
                                <div className="restaurant-h1">
                                    <input type="text" value={search} onChange={updateSearch} className="restaurant-h1" placeholder="Search" style={{ fontSize: "26px", margin: 0, padding: 0, border: "none" }} />
                                </div>

                                {filteredRestaurants.map(restaurant => (

                                    <div onClick={() => handleClick(restaurant)} className="restaurant-card" key={restaurant.id} style={{ cursor: "pointer" }}>

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
                                                                <div className="menu-item-card" style={{ width: "100%" }} key={menuItem.id}>
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
            </div> */}
        </StyledRestaurantPage>
    );
}


export default RestaurantPage;