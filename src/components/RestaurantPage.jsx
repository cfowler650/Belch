import React, { useContext, useEffect, Component } from "react";
import axios from "axios";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledRestaurantPage from "../styles/StyledRestaurantPage";

// class RestaurantPage extends Component {
//     constructor(){
//         super(props)
//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <StyledRestaurantPage>
//                 <div
//                     className="restaurant-page-container"
//                     style={{ textAlign: "center" }}
//                 >
//                     <h1>Restaurant Page</h1>

//                     <div className="restaurant-list-container">
//                         {restaurants.map(restaurant => (
//                             <div className="restaurant-card">
//                                 <Link to={`restaurant_page/${restaurant.id}`}>
//                                     <h2> {restaurant.name} </h2>
//                                     <img
//                                         className="restaurant-image"
//                                         src={restaurant.image}
//                                     />
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </StyledRestaurantPage>
//         );
//     }

// }

function RestaurantPage({ match }) {
    const [data, setData] = useContext(RestaurantContext);

    return (
        <StyledRestaurantPage>
            <div
                className="restaurant-page-container"
                style={{ textAlign: "center" }}
            >
                <h1>Restaurant Page</h1>

                <div className="restaurant-list-container">
                    {data.restaurants.map(restaurant => (
                        <div className="restaurant-card">
                            <Link to={`restaurant_page/${restaurant.id}`}>
                                <h2> {restaurant.name} </h2>
                                <img
                                    className="restaurant-image"
                                    src={restaurant.image}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </StyledRestaurantPage>
    );
}

export default RestaurantPage;
