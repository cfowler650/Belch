import React, { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledMenuPage from "../styles/StyledMenuPage";
import axios from "axios";

class RestaurantMenuPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: []
        };

    }



    componentDidMount() {
        axios
            .get(
                `/api/restaurants/${this.props.match.params.restaurantId}.json`
            )
            .then(data => {
                let res = [];

                data.data.menuItems.map(item => {
                    ///prefix data.data to access actual return value
                    res.push({
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        image: item.image,
                        reviews: item.reviews,
                        res_name: data.data.name
                    });
                    this.setState({ dishes: res });
                });
            })
            .catch(data => {
                debugger;
            });


        window.scrollTo(0, 0) //rests scroll from previous page

    }



    handleReturnToMenu() {
        this.props.history.goBack();
    }

    render() {
        return (
            <StyledMenuPage>
                <div className="background" style={{ position: "fixed", display: "flex", justifyContent: "center" }} > {/*this is the actual top container content*/}
                    <div className="behind" style={{}}>
                        <div className="res-name-container">
                            <h1 style={{ fontSize: "40px", color: "white" }}>
                                {this.state.dishes[0] !== undefined ? <>{this.state.dishes[0].res_name}</> : <p>Loading...</p>}
                            </h1>
                        </div>
                    </div>
                </div>


                <div className="main-container" style={{ margin: "0" }}>
                    <div className="sticky-container" >
                        <div className="sticky-bar" id='sticky-bar-1'>
                            <div className="content-top">
                                <div className="belch-title-div" style={{}}>
                                    <Link to={'/'}><h1 style={{ margin: 0, paddingLeft: "100px" }} className="belch-title"> Belch </h1></Link>
                                </div>
                                {/* <div className="nav-links" style={{}}>
                                    <div className="nav-link-div" >
                                        <Link className="nav-button-link" to={"/"}> Home </Link>
                                    </div>
                                    <div className="nav-link-div">
                                        <Link className="nav-button-link" to={"/restaurant_page"}> Restaurants </Link>
                                    </div>
                                    <div className="nav-link-div">
                                        <Link className="nav-button-link" > Account </Link>
                                    </div>

                                </div> */}

                            </div>

                            <div className="top-content-container-window" style={{ marginTop: "250px" }}>{/*this is window container size */}
                            </div>
                        </div>


                        <div className="sticky-container-2">
                            <div className="sticky-bar" id='sticky-bar-2'>
                                <div className="belch-title-div">
                                    <div className="restaurant-h1-div">
                                        <h2 className="restaurant-h1">menu items </h2>
                                        {/* <input type="text" className="restaurant-h1" placeholder="" style={{ fontSize: "26px", margin: 0, padding: 0, border: "none" }} /> */}
                                    </div>
                                </div>
                            </div>


                            <div className="dishes-container">
                                {this.state.dishes.map(dish => (
                                    <div className="dish-card" key={dish.id}>
                                        <div className="dish-image-container" >
                                            <img className="dish-image" src={dish.image} />
                                        </div>
                                        <div className="dish-name-div">
                                            <Link
                                                to={`${this.props.match.url}/${dish.id}`}
                                            >
                                                <h2 className="dish-name-h2">
                                                    {dish.name}
                                                </h2>
                                            </Link>
                                            <p className="dish-detail">
                                                {dish.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div style={{ marginTop: "500px" }}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </StyledMenuPage>
        );
    }
}

export default RestaurantMenuPage;





{/* <div className="sticky-container" style={{}}>
                    <div className="sticky-bar" id="sticky-bar-1">
                        <div className="nav-bar-content" style={{ display: "flex" }}>
                            <div className="belch-title-div" style={{ flex: 1 }}>
                                <Link to={'/'}><h1 className="belch-title"> Belch </h1></Link>
                            </div>
                            <div className="middle-divider" style={{ width: "33%" }}>

                            </div>
                            <div className="right-divider" style={{ flex: 1 }}>
                                <div className="nav-links" style={{}}>
                                    <div className="nav-link-div" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                                        <Link className="nav-button-link" to={"/"}> Home </Link>
                                    </div>
                                    <div className="nav-link-div" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                                        <Link className="nav-button-link" to={"/restaurant_page"}> Restaurants </Link>
                                    </div>
                                    <div className="nav-link-div" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                                        <Link className="nav-button-link" > Account </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="content-1">
                            <div className="parent" style={{ zIndex: "-1" }}>
                                <div className="top-content-container" style={{}}>
                                    <div className="header-container">
                                        <h1 style={{ fontSize: "40px", color: "white", position: "sticky", top: 0 }}>
                                            {this.state.dishes[0] !== undefined ? <>{this.state.dishes[0].res_name}</> : <p>Loading...</p>}
                                        </h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="sticky-container-2">
                        <div className="sticky-bar" id='sticky-bar-2' >
                            <div className="dishes-container">

                                <div>Menu items</div>

                                {this.state.dishes.map(dish => (
                                    <div className="dish-card" key={dish.id}>
                                        <div className="dish-image-container" >
                                            <img className="dish-image" src={dish.image} />
                                        </div>
                                        <div className="dish-name-div">
                                            <Link
                                                to={`${this.props.match.url}/${dish.id}`}
                                            >
                                                <h2 className="dish-name-h2">
                                                    {dish.name}
                                                </h2>
                                            </Link>
                                            <p className="dish-detail">
                                                {dish.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <div style={{ marginTop: "500px" }}>test</div>
                            </div>
                        </div>
                    </div>

                </div> */}

// <div className="content">
//     content
//     content
//     content
//     content
//                                         </div>
//     <div className="content">
//         content
//         content
//         content
//         content
//                                         </div>
//     <div className="content">
//         content
//         content
//         content
//         content
//                                         </div>

//     <div className="content">
//         content
//         content
//         content
//         content
//                                         </div>
//     <div className="content">
//         content
//         content
//         content
//         content
//                                         </div>
//     <div className="content">
//         content
//         content
//         content
//         content
//                                         </div>