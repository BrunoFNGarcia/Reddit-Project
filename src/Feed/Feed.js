import React from "react";
import Posts from "../Posts/Posts";
import './Feed.css';

function Feed(props) {
    return (
        <div className="Feed">
            {props.feed.map((post) => {
                return (
                    <Posts
                        key={post.data.id}
                        title={post.data.title}
                        text={post.data.selftext}
                        isImage={post.data.post_hint}
                        url={post.data.url}
                        isGallery={post.data.is_gallery}
                        gallery={post.data.media_metadata}
                        isVideo={post.data.is_video}
                        video={post.data.media}
                        subreddit={post.data.subreddit}
                        subredditPrefix={post.data.subreddit_name_prefixed}
                    />
                )
            })}
        </div>
    )
}

export default Feed;