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
    let balls = 0;
    let sum = []; // this holds the sum of

    const starAvgGenerator = rating => {
        let stars = [];

        let array = rating => {
            for (var i = 0; i < rating; i += 1) stars.push("fa fa-star");
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
                                {(balls = 0)}
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
                                            review => (balls += review.rating)
                                        )}
                                    </p>
                                </div>
                                <p style={{ display: "none" }}>
                                    {sum.push(
                                        Math.floor(balls / dish.reviews.length)
                                    )}
                                </p>

                                {starAvgGenerator(sum[index])}
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
