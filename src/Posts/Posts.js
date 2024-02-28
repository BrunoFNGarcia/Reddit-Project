import React from "react";
import './Posts.css';
import Gallery from "./components/gallery/Gallery";

function Posts(props) {
    return (
        <div className="Posts">
            <div className="PostsContent">
                <h5 className="PostsSubredditPrefix">{props.subredditPrefix}</h5>
                <h3 className="PostsTitle">{props.title}</h3>
                <div className="PostsSlider">
                    {props.isGallery && 
                    <Gallery
                        keys={Object.keys(props.gallery)}
                        gallery={props.gallery}
                    />}
                </div>
                {props.isVideo && <video className="PostsVideo" src={props.video.reddit_video.fallback_url} controls></video>}
                {props.isImage === 'image' && <img className="PostsImg" src={props.url}/>}
                {props.text !== '' && <p className="PostsText">{props.text}</p>}
            </div>
            <div className="PostsSubsection">
                <p className="PostsSubsectionComments">Comments</p>
                <p className="PostsSubsectionShare">Share</p>
            </div>
        </div>
    )
}

export default Posts;