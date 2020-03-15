import React, { useEffect, useState } from 'react';
import { Grid, Image, Dropdown, Container, Input } from 'semantic-ui-react'
import { getTour } from '../../../services/api/tours';

import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
import { Banner } from '../../../components';

const INITIAL_STATE = {
    result: {},
    isLoading: true
}

function ToursSingle() {
    const [tour, setTour] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams()

    useEffect(() => {
        const getSingleTour = async () => {
            const result = await getTour(id);
            console.log("KDSFFS", result.results[0])
            setTour(result.results[0])
            setIsLoading(false)
        };
        getSingleTour();
    }, [])

    if (isLoading) {
        return (
            <h1>loading</h1>
        )
    }
    console.log(tour)
    return (
        <div>
            {/* Banner */}
            <Banner image={tour.images[0].source_url} />

            <Container>
                <Grid>
                    <Grid.Row>

                        <span>{tour.vendor}</span>
                        <h1>{tour.name}</h1>

                    </Grid.Row>

                    <Grid.Row>
                        {tour.tag_labels.map(tag => {
                            return <span key={tag}>{tag}</span>
                        })}
                    </Grid.Row>

                    <Grid.Row>
                        <span>{tour.score}</span>
                        <span>{tour.price.currency} {tour.price.amount}</span>
                    </Grid.Row>

                    <Grid.Row>
                        <p>{tour.intro}</p>
                    </Grid.Row>

                    <Grid.Row>
                        <h2>Highlights</h2>
                        <div>
                            {tour.highlights.map((index, highlight) => {
                                return (
                                    <div key={highlight}>
                                        <span>{index + 1}</span>
                                        <span>{highlight}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </Grid.Row>

                </Grid>
            </Container>
        </div>
    )
}

export default ToursSingle;