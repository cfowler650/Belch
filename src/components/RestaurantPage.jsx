import React, { useContext, useEffect, useState, Component } from "react";
import axios from "axios";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledRestaurantPage from "../styles/StyledRestaurantPage";

const MainContent = ({ selectedRestaurant }) => {

    return (
        <>
            {selectedRestaurant ?
                <div className="main-content-container" style={{
                    display: "flex", borderTop: "2px solid black", padding: "2%",
                    height: "300px", justifyContent: "center"
                }}>
                    <div style={{ maxHeight: "300px", maxWidth: "40%", padding: "0% 4%", display: "flex" }}>
                        <div style={{ display: "flex", maxWidth: "600px" }}>
                            <img style={{ flex: 1, maxWidth: "100%" }} src={selectedRestaurant.image} />
                        </div>
                    </div>
                    <div style={{ maxHeight: "400px", width: "60%", border: "2px solid blue", marginRight: "4%", paddingRight: "4%" }}>
                        <div
                            className="top-rated-dish-content"
                            style={{
                                paddingLeft: "3%",
                                flexDirection: "column",
                                justifyContent: "space-evenly"
                            }}
                        >

                            {selectedRestaurant.menuItems !== undefined
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


                <div className="main-content-container" style={{ display: "flex", borderTop: "2px solid black", justifyContent: "center" }}>
                    <div style={{ minHeight: "327px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
        // .catch(function (error) {
        //     // oops, mom don't buy it
        //     console.log(error.message);
        //     // output: 'mom is not happy'
        // });
    };


    // const handleDishSelect = (e) => {



    //     if (firstRender == true) {

    //         setFirstRender(false)
    //     }

    //     let dish = data.restaurants.find(restaurant => restaurant.id === parseInt(e.target.id))

    //     setselectedRestaurant(dish);

    // };




    return (
        <StyledRestaurantPage>
            <div className="real-sticky">
                <div className="real-sticky-child" style={{ position: "sticky", top: 0, height: "350px", border: "4px solid blue" }}>
                    <div className="nav-sticky" style={{ padding: "0%", marginBottom: "2px" }}>
                        <div className="nav-sticky-child" style={{ display: "flex", justifyContent: "space-between", top: 0 }}>
                            <div className="belch-title" style={{ paddingLeft: "2%" }}>
                                <Link to={'/'}><h1 style={{ paddingLeft: "2%", fontSize: "30px" }}> Belch </h1></Link>
                            </div>
                            {/* <div style={{ display: "flex", justifyContent: "space-between", width: "60%", paddingRight: "2%" }}>
                                <h1 style={{ fontSize: "30px" }}>Menu</h1>
                                <h1 style={{ fontSize: "30px" }}>Account</h1>
                            </div> */}
                        </div>
                        {console.log(firstRender)}

                        {firstRender == true ?
                            <div className="main-content-container" style={{ display: "flex", borderTop: "2px solid black", justifyContent: "center" }}>
                                <div style={{ minHeight: "327px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <h1 style={{ letterSpacing: "4px" }}>Welcome to Belch, choose a restaurant to get started</h1>
                                </div>
                            </div>
                            :

                            <MainContent selectedRestaurant={selectedRestaurant} />

                        }


                        {/* <div
                            style={{
                                textAlign: "center",
                                border: "1px solid red",
                                background: "white"
                            }}
                        >
                            <h1 style={{}}>restaurants</h1>
                        </div> */}
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
                                <div onClick={handleDishSelect} id={restaurant.id} className="restaurant-card" key={restaurant.id}>

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
                                            {/* {restaurant.menuItems} */}
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

