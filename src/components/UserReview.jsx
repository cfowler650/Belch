import React from "react";

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

const UserReview = ({ review, author, starCount }) => {
    return (
        <div>
            <img src="https://react.semantic-ui.com/images/avatar/small/matthew.png" />
            <span>{review}</span>
            <span>{author}</span>
            <div>{starGenerator(starCount)}</div>
        </div>
    );
};
export default UserReview;