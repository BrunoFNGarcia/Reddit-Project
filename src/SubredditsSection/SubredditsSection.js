import React from "react";
import Subreddits from "../Subreddits/Subreddits";
import './SubredditsSection.css';

function SubredditsSection(props) {
    return (
        <div className="SubredditsSection" >
            {props.subreddits.map(sr => {
                return (
                    <Subreddits
                        key={sr.data.id}
                        subredditPrefix={sr.data.subreddit_name_prefixed}
                        subreddit={sr.data.subreddit}
                        onClick={props.onClick}
                    />
                )
            })}
        </div>
    )
};

export default SubredditsSection;