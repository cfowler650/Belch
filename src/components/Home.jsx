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
        // <div className="modal-container">
        //     <div className="modal-header">
        //         <h1>Sign Up</h1>
        //     </div>
        // </div>
        <>
            <div
                className="bg-text"
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <div>
                    <h2 style={{ fontSize: "30px" }}>Sign Up</h2>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <input
                            type="text"
                            style={{
                                width: "300px",
                                height: "40px",
                                marginBottom: "30px"
                            }}
                            placeholder="   Choose a username..."
                        />
                        <input
                            type="text"
                            style={{ width: "300px", height: "40px" }}
                            placeholder="   Create a password..."
                        />
                    </div>
                </div>

                <p>Already a member? Click here.</p>

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
            <div
                style={{
                    zIndex: 2,
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    paddingLeft: "2%",
                    paddingTop: "1%",
                    width: "100vw",
                    fontSize: "30px",
                    color: "white"
                }}
            >
                Belch
            </div>

            <div
                style={{
                    zIndex: 2,
                    position: "absolute",
                    paddingLeft: "94%",
                    paddingTop: "1%",
                    width: "50vw",
                    height: "10vh",
                    fontSize: "24px",
                    color: "white"
                }}
            >
                Login
            </div>
        </StyledHome>
    );
}

export default Home;
