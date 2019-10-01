import React, { useContext } from "react";
import { RestaurantContext } from "./RestaurantContext";
import { Link } from "react-router-dom";

function RestaurantMenuPage({ match }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);

    let selectedRestaurant = restaurants.find(
        x => x.id === parseInt(match.params.restaurantId)
    );
    let dishes = selectedRestaurant.menuItems;

    return (
        <div style={{ textAlign: "center" }}>
            <div>
                {dishes.map(dish => (
                    <Link to={`${match.url}/${dish.id}`}>
                        <h1>{dish.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenuPage;
