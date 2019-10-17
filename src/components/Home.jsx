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
                    <h2 className="sign-up-header">Create an account</h2>
                    <div className="login-container" >
                        <h5 className="email-h5">Email</h5>
                        <input className="auth-input-field"
                            type="text" />
                        <h5 className="email-h5" style={{ paddingRight: "71.5%", marginTop: "13px" }}>Password</h5>
                        <input
                            className="auth-input-field"
                            type="text"


                        />

                        <p>Already a member? Click here.</p>
                    </div>

                </div>
                <div className="guest-button">
                    <Link to={`/restaurant_page`} style={{
                        padding: "4%",
                        background: "#222",
                        width: "380px"
                    }}>Continue as guest...</Link>
                </div>




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
