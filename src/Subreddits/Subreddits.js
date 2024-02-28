import React from "react";
import './Subreddits.css';

function Subreddits(props) {

    const handleClick = () => {
        props.onClick(props.subreddit)
    }

    return (
        <div className="Subreddit">
            <h3 onClick={handleClick}>{props.subredditPrefix}</h3>
        </div>
    )
};

export default Subreddits;