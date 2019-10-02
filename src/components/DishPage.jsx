import React, { useState, useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import ReviewsController from "./ReviewsController";

function DishPage({ match }) {
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

    let thisDish = menu[currentDishIndex];

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={prevDish}>Prev Dish</button>
            <button onClick={nextDish}>Next Dish</button>

            <div>
                <h1>{thisDish.name}</h1>
                <img src={thisDish.image} />
            </div>

            <ReviewsController reviews={thisDish.reviews} />
        </div>
    );
}

export default DishPage;
