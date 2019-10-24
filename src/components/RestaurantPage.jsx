import React, { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledRestaurantPage from "../styles/StyledRestaurantPage";

function RestaurantPage({ match }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);
    const [selectedRestaurant, setselectedRestaurant] = useState(false);
    const [selectedResMenu, setselectedResMenu] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleClick = (target) => {
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
                    <div className="nav-flex">

                    <Link to={"/"} style={{flex: 1}}> <h1 className="h1-belch" style={{ background: "black",  color: "white", fontSize: "22px", paddingBottom: "10px" }}>Belch</h1> </Link>

                    <h1 style={{ background: "black", color: "white", fontSize: "18px", flex: "1" }}>
                         <input type="text" value={search} onChange={updateSearch} className="search-bar" placeholder="Search for restaurants..." style={{ border: "none" }} />
                    </h1>

                    <div style={{flex: 1}}>
                    </div>

                   </div>
                </div>

                <div className="img-div" style={{ background: "" }}>
                    <div className="header-text-div" style={{paddingTop: "3%"}}>
                        <h1 className="welcome-header" style={{ paddingBottom: 0 }}>Where are you eating today?</h1>
                    </div>
                    <div className="testing">
                        <img className="header-img" src="https://images.unsplash.com/photo-1473993493174-19f58d45cb13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80" />
                    </div>
                </div>

                <div className="nav-container" style={{ zIndex: "2", position: "relative" }}>
                    <div className="nav-main">
                         <h1 style={{ background: "black", color: "white", paddingTop: "2%", paddingBottom: "0.5%", paddingLeft: "128px", fontSize: "24px" }}>Restaurants</h1>
                    </div>

                    <div className="outer-container">
                        <div className="inner-container">
                            <div className="flex-container" >
                                {filteredRestaurants.map(restaurant => (

                                    <div onClick={() => handleClick(restaurant)}>
                                        <Link to={`/restaurant_page/${restaurant.id}`} style={{ cursor: "pointer" }}>
                                            <div className="content-diver">
                                                <img src={restaurant.image} className="img-test" />
                                                <div className="res-content" style={{color: "white"}}>
                                                    <h3 style={{ margin: 0, padding: 0, paddingTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "16px", color: "white" }}>

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
                </div>
            </div>

        </StyledRestaurantPage>
    );
}


export default RestaurantPage;