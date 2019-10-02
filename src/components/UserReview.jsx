import React from "react";

const UserReview = ({ review, starCount }) => {
    return (
        <div>
            {review}
            <div>{starGenerator(starCount)}</div>
        </div>
    );
};

const starGenerator = rating => {
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
                        key={Math.random(0, 1000000)} //this doesnt actaully have a unique id yet this just clears console error for now
                    />
                );
            })}
        </>
    );
};

export default UserReview;
