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
        setSearch(e.target.value.substr(0, 25) )
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
                                        <p style={{color: "white"}}>We'll let you know the best item to order on the menu.</p>
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
                                    <div className="main-content-welcome-child" style={{paddingTop: 0}}>
                                        <h1 className="welcome-header" style={{paddingBottom: 0}}>{selectedResMenu[0].name} {console.log(selectedResMenu[0].name)}</h1>
                                        <div className="rendered-child-image-div">
                                                <img className="rendered-child-image" src={selectedResMenu[0].image} />
                                        </div>
                                        <p style={{color: "white"}}>Best item at {selectedRestaurant.name}</p>
                                        <div style={{ background: "black", width: "100%" }}>
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
                                            <div className="restaurant-name-top-header">
                                                {restaurant.name}
                                            </div>
                                            <h2 className="restaurant-price"> $$ </h2>
                                        </div>

                                        <div className="restaurant-inner-content">
                                            <div>
                                                <h3 className="restaurant-cuisine-text">American Cuisine</h3>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", }}>
                                                <Link style={{color: "white"}} to={`/restaurant_page/${restaurant.id}/${restaurant.menuItems[0].id}`}>
                                                     <h3 className="restaurant-reviews-text">3000 Reviews</h3>
                                                 </Link>
                                            </div>

                                                    <Collapsible triggerStyle={{display: "flex", alignItems: "center",  flexDirection: "column"}} trigger="View Menu">
                                                        <div style={{display: "flex", alignItems: "center",  flexDirection: "column"}}>

                                                            <div className="menu-item-list-container" style={{display: "flex", alignItems: "center",  flexDirection: "column", paddingTop: "15px", width:"100%"}}>
                                                             {restaurant.menuItems.map(menuItem => (
                                                                <div className="menu-item-card" style={{width: "100%"}}>
                                                                    <div className="menu-item-card-content" style={{display: "flex", paddingBottom: "3%"}}>
                                                                        <div className="menu-item-card-image-div"><img className="menu-item-card-image" src={menuItem.image}/></div>
                                                                        <div className="menu-item-card-details" style={{marginRight: "23px", paddingLeft: "20px"}}>
                                                                           <Link style={{color: "white"}}to={`/restaurant_page/${restaurant.id}/${menuItem.id}`}> <p className="menu-item-card-name" style={{fontSize: "16px", margin:"0px"}}>{menuItem.name} </p> </Link>
                                                                            <div className="menu-item-card-description" style={{fontSize: "10px"}}>
                                                                                {menuItem.description}
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

                                {console.log(filteredRestaurants)}

                        </div>
                    </div>
                </div>
            </div>
        </StyledRestaurantPage>
    );
}


export default RestaurantPage;



// const MainContent = ({ selectedRestaurant }) => {

//     return (
//         <>
//             {
//                 selectedRestaurant

//                     ?

//                     <div className="main-content-rendered">
//                         <div className="main-content-rendered-child">
//                             <div className="rendered-child-image-div">
//                                 <img className="rendered-child-image" src={selectedRestaurant.image} />
//                             </div>
//                         </div>

//                         <div className="main-content-rendered-child-2">
//                             <div className="top-rated-dish-content">
//                                 {
//                                     selectedRestaurant.menuItems !== undefined

//                                         ?

//                                         <>
//                                             <h3> Top Dish At {selectedRestaurant.name}</h3>
//                                             <h1>{selectedRestaurant.menuItems[0].name}</h1>
//                                             <h3 style={{ fontSize: "16px" }}>{selectedRestaurant.menuItems[0].description}</h3>
//                                         </>

//                                         :

//                                         <p></p>
//                                 }
//                             </div>
//                         </div>
//                     </div>

//                     :

//                     <div className="main-content-welcome" style={{}}>
//                         <div className="main-content-welcome-child" style={{}}>
//                             <h1 className="welcome-header">Welcome to Belch, choose a restaurant to get started</h1>
//                             <div className="restaurants-header">
//                                 Restaurants
//                                 </div>
//                         </div>
//                     </div>
//             }
//         </>
//     );

// }