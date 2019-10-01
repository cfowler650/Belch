import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div
            style={{
                alignContent: "center",
                display: "flex",
                justifyContent: "space-evenly",
                backgroundColor: "LightSeaGreen"
            }}
        >
            <Link to={"/"}>
                <h3>Home</h3>
            </Link>
            <Link to={"/restaurant_page"}>
                <h3>Restaurants</h3>
            </Link>
        </div>
    );
};

export default Nav;
