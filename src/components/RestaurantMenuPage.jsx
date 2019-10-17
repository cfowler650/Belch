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
    }

    handleReturnToMenu() {
        this.props.history.goBack();
    }

    render() {
        return (
            <StyledMenuPage>

                <div className="menu-page-container" style={{ margin: "0" }}>
                    <div className="sticky-container" style={{ position: "sticky", top: 0 }}>
                        <div className="nav-bar">
                            <div className="belch-title-div" style={{ flex: 1 }}>
                                <Link to={'/'}><h1 className="belch-title"> Belch </h1></Link>
                            </div>
                            <div className="middle-divider" style={{ flex: 1, marginLeft: "539px", marginRight: "500px" }}>
                            </div>
                            <div className="right-divider" style={{ flex: 1 }}>
                            </div>
                        </div>
                        <div className="parent">
                            <div className="top-content-container" style={{}}>
                                <div className="header-container">
                                    <h1 style={{ fontSize: "40px", color: "white", position: "sticky", top: 0 }}>
                                        {this.state.dishes[0] !== undefined ? <>{this.state.dishes[0].res_name}</> : <p>Loading...</p>}
                                    </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*              <Link to={"/restaurant_page/"}> <button>Back To All Restaurants </button> </Link> */}
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
                    </div>

                </div>
            </StyledMenuPage>
        );
    }
}

export default RestaurantMenuPage;
