import React, { useContext } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import StyledMenuPage from "../styles/StyledMenuPage";

function RestaurantMenuPage({ match }) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);

    let selectedRestaurant = restaurants.find(
        x => x.id === parseInt(match.params.restaurantId)
    );

    let dishes = selectedRestaurant.menuItems;
    let currentSum = 0; //current rating sum for each iteration of map
    let sum = []; // this holds the sum of each dishes total reviews as seperate elements in array dish 0 rating sum = sum[0]

    const starAvgGenerator = rating => {
        let stars = [];

        let array = rating => {
            for (var i = 0; i < rating; i += 1) stars.push("fa fa-star fa-lg");
        };

        array(rating);

        return (
            <>
                {stars.map(star => {
                    return (
                        <li
                            className={star}
                            aria-hidden="true"
                            style={{ margin: 0 }}
                            style={{
                                paddingTop: "0.5vh",
                                color: "gold"
                                // border: "1px solid black"
                            }}
                        />
                    );
                })}
            </>
        );
    };

    return (
        <StyledMenuPage>
            <div className="menu-page-container">
                <div className="menu-page-child-1">
                    <h1>{selectedRestaurant.name} Menu</h1>
                    <div className="dishes-container">
                        {dishes.map((dish, index) => (
                            <div className="dish-card">
                                <p style={{ display: "none" }}>
                                    {(currentSum = 0)}
                                </p>
                                <img className="dish-image" src={dish.image} />
                                <div className="dish-name-div">
                                    <Link to={`${match.url}/${dish.id}`}>
                                        <h2 className="dish-name-h2">
                                            {dish.name}
                                        </h2>
                                    </Link>
                                    <p className="dish-detail">
                                        {dish.details}
                                    </p>
                                    <p style={{ display: "none" }}>
                                        {dish.reviews.forEach(
                                            review =>
                                                (currentSum += review.rating)
                                        )}
                                    </p>
                                </div>
                                <p style={{ display: "none" }}>
                                    {sum.push(
                                        Math.floor(
                                            currentSum / dish.reviews.length
                                        )
                                    )}
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        // border: "1px solid red",
                                        width: "500px"
                                    }}
                                >
                                    <div style={{ display: "flex" }}>
                                        {starAvgGenerator(sum[index])}{" "}
                                        <h3
                                            style={{
                                                margin: 0,
                                                padding: "0 1vh"
                                            }}
                                        >
                                            / {dish.reviews.length}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {console.log(sum)}
            </div>
        </StyledMenuPage>
    );
}

export default RestaurantMenuPage;
