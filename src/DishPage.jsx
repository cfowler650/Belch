import React, { useState, useContext } from "react";
import { RestaurantContext } from "./RestaurantContext";
// import { Link } from "react-router-dom";

let i = 1;
function DishPage({ match }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);
    const [currentDishIndex, setcurrentDishIndex] = useState(0);
    const [firstRender, setfirstRender] = useState(true);

    //get matched restaurant and dish ids
    let selectedDishId = parseInt(match.params.dishId);
    let selectedResId = parseInt(match.params.restaurantId);

    //grab matched res and isolate menu array
    let selectedRestaurant = restaurants.find(res => res.id === selectedResId);
    let menu = selectedRestaurant.menuItems;

    //grab selecteddish from that menu
    let selectedDish = menu.find(dish => dish.id === selectedDishId);
    let selectedDishIDX = menu.findIndex(dish => dish.id === selectedDishId);

    const nextDish = () => {
        setfirstRender(false);

        if (currentDishIndex == menu.length - 1) {
            return;
        }
        setcurrentDishIndex(currentDishIndex + 1);
    };

    const prevDish = () => {
        setfirstRender(false);

        if (currentDishIndex == 0) {
            return;
        }
        setcurrentDishIndex(currentDishIndex - 1);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={prevDish}>Prev Dish</button>
            <button onClick={nextDish}>Next Dish</button>
            {firstRender ? (
                <h1>{menu[selectedDishIDX].name}</h1>
            ) : (
                <h1>{menu[currentDishIndex].name}</h1>
            )}
        </div>
    );
}

export default DishPage;
