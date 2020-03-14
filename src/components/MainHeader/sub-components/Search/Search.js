import React, { useState, useEffect } from 'react';
import { Search, Grid, Header, Segment, Input } from 'semantic-ui-react'
import './Search_styles.scss';

const fakeData = [
    {
        "title": "Lakin - Kessler",
        "description": "Decentralized mobile superstructure",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg",
        "price": "$28.30"
    },
    {
        "title": "Cartwright Group",
        "description": "User-centric local success",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg",
        "price": "$96.82"
    },
    {
        "title": "Lueilwitz, Kuhlman and McKenzie",
        "description": "Up-sized maximized structure",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/petar_prog/128.jpg",
        "price": "$43.22"
    },
    {
        "title": "O'Keefe and Sons",
        "description": "Customer-focused 5th generation capacity",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/kikillo/128.jpg",
        "price": "$63.22"
    },
    {
        "title": "Buckridge, Considine and Buckridge",
        "description": "Object-based zero tolerance paradigm",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/bighanddesign/128.jpg",
        "price": "$26.35"
    }
]

const INITIAL_STATE_SEARCH = {
    isLoading: false,
    results: [],
    value: '',
    isOpen: false,
}

//TODO: Build a custom search... Semantic UI has Zero customisation. 
const SearchBar = () => {
    const [state, setState] = useState(INITIAL_STATE_SEARCH)

    useEffect(() => {
        setState({ results: fakeData })
    }, [])

    function handleResultSelect() {

    }

    function handleSearchChange() {

    }

    function populateResults() {
        if (state.results.length === 0) {
            return "No tours found.";
        }
        return state.results;
    }

    useEffect(() => {

    }, [])

    return (
        <div className="search-bar">

            <Input
                className="search-bar__input"
                loading={state.isLoading ? true : false}
                icon='search'
                placeholder='Search...'
            />
            <div className={`search-bar__results ${state.isOpen ? 'is-open' : ""}`}>
                {/* {populateResults()} */}
                <div>
                    <h1>Hello</h1>
                </div>

            </div>
        </div>
    );
}

export default SearchBar;