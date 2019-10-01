import React, { useState, createContext } from "react";
import { data } from "./data";

export const RestaurantContext = createContext();

export const RestaurantProvider = props => {
    const [restaurants, setRestaurants] = useState(data);

    return (
        <RestaurantContext.Provider value={[restaurants, setRestaurants]}>
            {props.children}
        </RestaurantContext.Provider>
    );
};
