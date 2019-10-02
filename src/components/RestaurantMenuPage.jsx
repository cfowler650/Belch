import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledMenuPage from "../styles/StyledMenuPage";

function RestaurantMenuPage({ match }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);

    let selectedRestaurant = restaurants.find(
        x => x.id === parseInt(match.params.restaurantId)
    );
    let dishes = selectedRestaurant.menuItems;

    return (
        <StyledMenuPage>
            <div className="menu-page-container">
                <div className="menu-page-child-1">
                    <h1>{selectedRestaurant.name} Menu</h1>
                    <div className="dishes-container">
                        {dishes.map(dish => (
                            <div className="dish-card">
                                <img className="dish-image" src={dish.image} />
                                <div className="dish-name-div">
                                    <Link to={`${match.url}/${dish.id}`}>
                                        <h2 className="dish-name-h2">
                                            {dish.name}
                                        </h2>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </StyledMenuPage>
    );
}

export default RestaurantMenuPage;
