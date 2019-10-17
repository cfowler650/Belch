import React, { useState, useContext, useEffect } from "react";
import { RestaurantContext } from "../RestaurantContext";

import StyledHome from "../styles/StyledHome";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import StyledModal from "../styles/StyledModal";

const LoginModal = () => {
    return (

        <>
            <div className="bg-text" style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <h2 style={{ fontSize: "30px" }}>Sign Up</h2>
                    <div className="login-container" >
                        <input className="auth-input-field"
                            type="text"

                            placeholder="   Choose a username..."
                        />
                        <input
                            className="auth-input-field"
                            type="text"

                            placeholder="   Create a password..."
                        />

                        <p>Already a member? Click here.</p>
                    </div>

                </div>


                <p>
                    <Link to={`/restaurant_page`}>Continue as guest...</Link>
                </p>
            </div>
        </>
    );
};

function Home(props) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);
    const [testdata, setTestdata] = useState({ tester: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/api/users");
            setTestdata(result.data);
        };
        fetchData();
    }, []);

    return (
        <StyledHome>
            <div className="bg-image-div">
                <img
                    className="bg-image"
                    src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

                />
            </div>
            <LoginModal />
            <div className="belch-nav-title">
                Belch
            </div>

            <div className="login-nav-title">


                Login
            </div>
        </StyledHome>
    );
}

export default Home;
