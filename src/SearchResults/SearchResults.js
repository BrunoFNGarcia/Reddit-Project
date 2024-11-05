import React from "react";
import './SearchResults.css';

function SearchResults(props) {

    return (
        <>
            {props.searchResults.length === 0 ? null :
            <div className="SearchResultsContainer">
                {props.searchResults.map(result => {
                    const handleClick = () => {
                        props.onClick(result.data.subreddit);
                        props.setSearchResults([]);
                    }
                    return (
                        <div onClick={handleClick} key={result.data.id} className="SearchResultsItem">
                            <h4>{result.data.subreddit_name_prefixed}</h4>
                        </div>
                    )
                })}
            </div>
            }
        </>
    )
};

export default SearchResults;