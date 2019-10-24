import React, { useState, useContext, useEffect } from "react";
import { RestaurantContext } from "../RestaurantContext";
import StyledHome from "../styles/StyledHome";
import axios from "axios";
import PostForm from "./PostForm";


function Home(props) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);
    const [testdata, setTestdata] = useState({ tester: [] });



    return (
        <StyledHome>
            <div className="bg-image-div">
                <img
                    className="bg-image"
                    src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

                />
            </div>

            <PostForm />
            <div className="belch-nav-title" style={{paddingLeft: "128px"}}>
                Belch
            </div>


        </StyledHome>
    );
}


export default Home;
