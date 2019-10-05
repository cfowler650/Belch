import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "../styles/StyledNav";

const Nav = () => {
    return (
        <StyledNav>
            <div className="main-nav-container">
                <Link to={"/"}>
                    <a className="nav-item-link">Home</a>
                </Link>
                <Link to={"/restaurant_page"}>
                    <a className="nav-item-link">Restaurants</a>
                </Link>
            </div>
        </StyledNav>
    );
};

export default Nav;
