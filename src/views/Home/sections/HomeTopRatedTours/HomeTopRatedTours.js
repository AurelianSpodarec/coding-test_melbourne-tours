import React, { useState, useEffect } from 'react';
import { Icon, Input, Button, Form, Image, Container, Grid } from 'semantic-ui-react'
import { TourItem } from '../../../../components';
import { getTopMalbourneTours } from '../../../../services/api/tours';


const INITIAL_STATE_TOURS = {
    results: [],
    isLoading: true
}

function HomeTopRatedTours() {
    const [tours, setTours] = useState(INITIAL_STATE_TOURS);

    //TODO: Refactor this as its WET
    function renderMalbourneTours() {
        if (tours.isLoading) {
            return [...Array(9)].map((x, i) =>
                <Grid.Column>
                    <TourItem loading />
                </Grid.Column>
            )
        } else if (tours.results && tours.results.length) {
            return tours.results.map(tour =>
                <Grid.Column>
                    <TourItem tour={tour} />
                </Grid.Column>
            )
        }

        return "Not tours found. Please comeback later. :-("
    }

    useEffect(() => {
        const fetchTopTours = async () => {
            const result = await getTopMalbourneTours();
            setTours({ results: result.results, isLoading: false })
        };
        fetchTopTours();
    }, [])

    return (

        <Container style={{ 'padding': '15px 0' }} >
            <h1>Best Offers</h1>
            <Grid columns='three' divided>
                <Grid.Row>
                    {renderMalbourneTours()}
                </Grid.Row>
            </Grid>

            <Button color="red">View all tours</Button>
        </Container>

    )
}

export default HomeTopRatedTours;