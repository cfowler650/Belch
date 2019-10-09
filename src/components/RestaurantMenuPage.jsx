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
                        reviews: item.reviews
                    });

                    this.setState({ dishes: res });
                });
            })
            .catch(data => {
                debugger;
            });
    }

    render() {
        return (
            <StyledMenuPage>
                <div className="menu-page-container">
                    <div className="dishes-container">
                        {this.state.dishes.map(dish => (
                            <div className="dish-card">
                                <img className="dish-image" src={dish.image} />
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
