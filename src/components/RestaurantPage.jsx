import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledRestaurantPage from "../styles/StyledRestaurantPage";

function RestaurantPage({ match }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);

    return (
        <StyledRestaurantPage>
            <div
                className="restaurant-page-container"
                style={{ textAlign: "center" }}
            >
                <h1>Restaurant Page</h1>

                <div className="restaurant-list-container">
                    {restaurants.map(restaurant => (
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
            </div>
        </StyledRestaurantPage>
    );
}

export default RestaurantPage;
