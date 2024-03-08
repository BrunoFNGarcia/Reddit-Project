import React from "react";
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className="SearchBar">
            <FaSearch className='SearchBarIcon' />
            <input
                className="SearchBarInput"
                type="text"
                placeholder="Search Reddit"
                onChange={props.onChange}
                value={props.value}
            >
            </input>
        </div>
    )
};

export default SearchBar;