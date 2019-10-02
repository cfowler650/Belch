import React, { useState, useEffect } from "react";

const ReviewsController = ({ reviews }) => {
    const [reviewsProps, setReviewsProps] = useState(reviews);

    console.log(reviewsProps);

    //rerenders ui to display props when props change
    useEffect(() => {
        setReviewsProps(reviews);
    }, [reviews]);

    return (
        <>
            {reviewsProps.map(review => (
                <h1>{review.description}</h1>
            ))}
        </>
    );
};

export default ReviewsController;
