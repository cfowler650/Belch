import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";

function Home(props) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);

    return (
        <div style={{ textAlign: "center" }}>
            <h1> Welcome to Belch </h1>

            <Link to={"/restaurant_page"}>
                <h2>View Restaurants </h2>
            </Link>
        </div>
    );
}

export default Home;
