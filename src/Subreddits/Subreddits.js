import React from "react";
import './Subreddits.css';

function Subreddits(props) {
    // const[classname, setClassname] = useState('');

    const handleClick = (e) => {
        props.onClick(props.subreddit);
        // setClassname(e.target);
        // setColor('#ff4500');
        // e.currentTarget.style.backgroundColor = '#ff4500';
    }

    return (
        <div className={props.selectedSubreddit === props.subreddit ? 'SelectedSubreddit' : 'Subreddit'} onClick={handleClick}>
            <h3>{props.subredditPrefix}</h3>
        </div>
    )
};

export default Subreddits;