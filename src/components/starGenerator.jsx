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
                        style={{ margin: 0, color: "yellow" }}
                    />
                );
            })}
        </>
    );
};

export default starGenerator;
