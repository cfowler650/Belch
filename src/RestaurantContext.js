import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { data } from "./data";

export const RestaurantContext = createContext();

export const RestaurantProvider = props => {
    const [data, setData] = useState({ restaurants: [], isFetching: false });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setData({ restaurants: data.restaurants, isFetching: true });
                const response = await axios.get("/api/restaurants");
                setData({
                    restaurants: response.data.data,
                    isFetching: false
                });
            } catch (e) {
                console.log(e);
                setData({ restaurants: data.restaurants, isFetching: false });
            }
        };
        fetchUsers();
    }, []);

    // console.log("ddatainrestaurantprovider", data);

    return (
        <RestaurantContext.Provider value={[data.restaurants, setData]}>
            {props.children}
        </RestaurantContext.Provider>
    );
};
