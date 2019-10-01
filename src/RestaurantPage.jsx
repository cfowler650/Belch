import React, { useContext } from "react";
import { RestaurantContext } from "./RestaurantContext";
import { Link } from "react-router-dom";

function RestaurantPage({ match }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Restaurant Page</h1>

            <div>
                {restaurants.map(restaurant => (
                    <Link to={`restaurant_page/${restaurant.id}`}>
                        <h2> {restaurant.name} </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RestaurantPage;
