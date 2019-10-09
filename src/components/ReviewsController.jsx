import React, { useState, useEffect } from "react";
import UserReview from "./UserReview";

const ReviewsController = ({ reviews }) => {
    const [reviewsProps, setReviewsProps] = useState(reviews);
    const [activeItem, setActiveItem] = useState("highest");

    //rerenders ui to display props when props change
    useEffect(() => {
        setReviewsProps(reviews);
    }, [reviews]);

    const handleActiveItemClick = e => {
        e.preventDefault();
        setActiveItem(e.target.name);
    };

    const orderReviews = (arr, order) => {
        switch (order) {
            case "highest":
                let highestOrd = arr.sort((a, b) => {
                    return a.rating < b.rating ? 1 : -1;
                });
                return highestOrd;

            case "lowest":
                let lowestOrd = arr.sort((a, b) => {
                    return a.rating > b.rating ? 1 : -1;
                });

                return lowestOrd;
            default:
                console.log("error no order supplied to sort by");
        }
    };

    const reviewsGenerator = sortType => {
        let orderedReviews = orderReviews(reviews, sortType);

        switch (sortType) {
            case "highest":
                return (
                    <>
                        {orderedReviews.map(review => {
                            return (
                                <UserReview
                                    starCount={review.rating}
                                    review={review.body}
                                    author={review.author}
                                    key={review.id}
                                />
                            );
                        })}
                    </>
                );

            case "lowest":
                return (
                    <>
                        {orderedReviews.map(review => {
                            return (
                                <UserReview
                                    starCount={review.rating}
                                    review={review.body}
                                    author={review.author}
                                    key={review.id}
                                />
                            );
                        })}
                    </>
                );
            default:
                return (
                    <>
                        {reviews.map(review => {
                            return (
                                <UserReview
                                    starCount={review.rating}
                                    review={review.review}
                                    author={review.author}
                                    key={review.id}
                                />
                            );
                        })}
                    </>
                );
        }
    };

    return (
        <div className="bottom-content-child">
            <div className="sort-section-container">
                <h2>Sort By:</h2>
                <div className="sort-button-group">
                    <button
                        name="highest"
                        onClick={handleActiveItemClick}
                        style={{
                            padding: "0 1%",
                            textDecoration: "underline"
                        }}
                    >
                        highest
                    </button>

                    <button
                        name="lowest"
                        style={{
                            textDecoration: "underline"
                        }}
                        onClick={handleActiveItemClick}
                    >
                        lowest
                    </button>
                </div>
            </div>

            <div className="reviews-generator-container">
                {reviewsGenerator(activeItem)}
            </div>
        </div>
    );
};

export default ReviewsController;
