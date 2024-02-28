import React from "react";
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="SearchBar">
            <FaSearch className='SearchBarIcon' />
            <input
                className="SearchBarInput"
                placeholder="Search Reddit">
            </input>
        </div>
    )
};

export default SearchBar;