import React, { useState, useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import ReviewsController from "./ReviewsController";
import StyledDishPage from "../styles/StyledDishPage";

function DishPage({ match, history }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);

    let selectedDishId = parseInt(match.params.dishId);
    let selectedResId = parseInt(match.params.restaurantId);
    let selectedRestaurant = restaurants.find(res => res.id === selectedResId);
    let menu = selectedRestaurant.menuItems;

    const initState = match => {
        let selectedDishIDX = menu.findIndex(
            dish => dish.id === selectedDishId
        );

        return selectedDishIDX;
    };

    const [currentDishIndex, setcurrentDishIndex] = useState(initState());

    const nextDish = () => {
        if (currentDishIndex != menu.length - 1) {
            setcurrentDishIndex(currentDishIndex + 1);
        }
    };

    const prevDish = () => {
        if (currentDishIndex != 0) {
            setcurrentDishIndex(currentDishIndex - 1);
        }
    };

    const handleReturnToMenu = () => {
        history.goBack();
    };

    let thisDish = menu[currentDishIndex];

    return (
        <StyledDishPage>
            <div
                className="dish-page-container"
                style={{ textAlign: "center" }}
            >
                <div className="dish-button-group">
                    <button onClick={handleReturnToMenu}>Menu</button>
                    <button onClick={prevDish}>Prev Dish</button>
                    <button onClick={nextDish}>Next Dish</button>
                </div>

                <div className="dish-container">
                    <h1>{thisDish.name}</h1>
                    <img className="main-dish-image" src={thisDish.image} />
                </div>

                <div className="bottom-content-container">
                    <ReviewsController reviews={thisDish.reviews} />
                </div>
            </div>
        </StyledDishPage>
    );
}

export default DishPage;
