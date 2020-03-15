import React, { useEffect, useState } from 'react';
import { Grid, Image, Dropdown, Container, Input } from 'semantic-ui-react'
import { getTour } from '../../../services/api/tours';

import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';

const INITIAL_STATE = {
    result: {},
    isLoading: true
}

function ToursSingle() {
    const [tour, setTour] = useState({});
    const [isLoading, seIsLoading] = useState(true);

    const { id } = useParams()

    useEffect(() => {
        const getSingleTour = async () => {
            const result = await getTour(id);
            console.log("KDSFFS", result)
            setTour(result.results)
            setIsLoading(false)
        };
        getSingleTour();


    }, [])

    if (isLoading) {
        return (
            <h1>loading</h1>
        )
    }
    // console.log(tour, "k")
    return (
        <div>
            {/* Banner */}
            {/* {tour.images[0].source_url} */}
            <h1>{tour.name}</h1>
            <span>{tour.vendor}</span>

            <span>{tour.score}</span>
            <span>{tour.currency} {tour.amount}</span>

            {/* {tour.tag_labels.map(tag => {
                return <span>{tag}</span>
            })} */}

        </div>
    )
}

export default ToursSingle;