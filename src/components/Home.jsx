import React, { useState, useContext, useEffect } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import axios from "axios";

function Home(props) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);
    const [testdata, setTestdata] = useState({ tester: [] });
    // useEffect(() => {
    //     fetch("/api/users")
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //         .catch(error => console.log(error));
    // });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/api/users");
            setTestdata(result.data);
        };
        fetchData();
    }, []);

    console.log(testdata);
    console.log(restaurants);

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
