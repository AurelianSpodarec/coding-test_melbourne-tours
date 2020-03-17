import React, { useState, useEffect } from 'react';
import { Input, Image, Grid } from 'semantic-ui-react'
import './Search_styles.scss';
import { getMalibourneTours, getTours } from '../../../../services/api/tours';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

// const INITIAL_STATE_SEARCH = {
//     isLoading: false,
//     results: [],
//     value: '',
//     isOpen: false,
// }

//TODO: Build a custom search. 
//TODO: REfacor the entire code
const SearchBar = () => {
    // const [state, setState] = useState(INITIAL_STATE_SEARCH)
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");
    const [tours, setTours] = useState([]);
    const [filteredTours, setFilteredTours] = useState([]);
    const [onFocus, setOnFocus] = useState(false)
    const history = useHistory();

    function handleResultSelect(e) {
        setIsLoading(true)
        setValue(e)
        setTimeout(() => {
            setIsLoading(false)
        }, 250)
    }

    function filteredData() {
        if (!filteredTours) return;
        let news = tours;
        let newResults = news.filter((tour => tour.name.toLowerCase().includes(value.toLowerCase())))
        console.log(newResults, "FFFF")
        setFilteredTours(newResults)

    }

    useEffect(() => {
        filteredData()
    }, [value])


    function populateResults() {
        if (filteredTours && filteredTours.length === 0) {
            return "No tours found.";
        }
        return (
            filteredTours && filteredTours.map(tour => {
                return (
                    <a key={tour.id} href={`/tours/${tour.id}`}>
                        <div className="search-bar__results-li">

                            <Image className="search-bar__results-img" src={tour.images[0].source_url} />

                            <div>
                                <h3>{tour.name && tour.name}</h3>
                                {tour.score && tour.score.toFixed(2)}
                                ${tour.price.amount}
                            </div>
                        </div>
                    </a>
                )
            })
        )
    }

    useEffect(() => {
        const fetchTours = async () => {
            const result = await getTours("Melbourne");
            setTours(result.results)
            if (!value === "") {
                setFilteredTours(result.results)
            }
            setIsLoading(false)
        };
        fetchTours();
    }, [])

    function isFocus() {

        if (!onFocus) {
            setOnFocus(true)
        }
    }

    function onBlur() {
        if (onFocus) {
            setOnFocus(false)
        }
        // setIsOpen(onFocus)
    }

    function onLeave() {
        console.log("On live")
        if (!onFocus) {
            setOnFocus(true)
        }
    }

    function onEnter(e) {
        if (e.key === 'Enter') {
            history.push("/tours");
        }
    }

    return (
        <div className="search-bar">
            {/* TODO: When clicking link, it closes instead of going there. onBlur is causing the bug */}
            <Input
                onFocus={isFocus}
                onBlur={onBlur}
                onKeyDown={onEnter}
                className="search-bar__input"
                loading={isLoading ? true : false}
                icon='search'
                onChange={(e) => handleResultSelect(e.target.value)}
                value={value}
                placeholder='Search...'
            />
            <div onMouseDown={isFocus} onMouseLeave={onLeave} className={`search-bar__results ${onFocus ? 'is-open' : ""}`} >
                <div className="search-bar__results-outer">
                    <div className="search-bar__results-inner">
                        <div>
                            {populateResults()}
                        </div>
                    </div>
                </div>
                <div className="search-bar__results-footer">
                    <a href="/tours">View All ({filteredTours.length})</a>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;