import React, { useState, useContext } from "react";
import { RestaurantContext } from "./RestaurantContext";

const AddRestaurant = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [imagePath, setImagePath] = useState("");

    const [restaurants, setRestaurants] = useContext(RestaurantContext);

    const updateName = e => {
        setName(e.target.value);
    };

    const updateId = e => {
        setId(e.target.value);
    };

    const updateImagePath = e => {
        setImagePath(e.target.value);
    };

    const addRestaurant = e => {
        e.preventDefault();
        setRestaurants(prevRestaurants => [
            ...prevRestaurants,
            { id: parseInt(id), name: name, image: imagePath }
        ]);
    };

    return (
        <form onSubmit={addRestaurant}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="id" value={id} onChange={updateId} />
            <input
                type="text"
                name="imagePath"
                value={imagePath}
                onChange={updateImagePath}
            />
            <button>Submit</button>
        </form>
    );
};

export default AddRestaurant;
