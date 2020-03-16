import React, { useState, useEffect } from 'react';
import { Button, Container, Grid } from 'semantic-ui-react'
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
        //TODO: Refactor
        <Container style={{
            'padding': '75px 0', 'text-align': 'center', 'width': '800px',
            'margin': '0 auto'
        }} >
            <h1>Best Offers</h1>

            <Grid style={{ 'padding': '32px 0' }} columns='three' stackable>
                <Grid.Row>
                    {renderMalbourneTours()}
                </Grid.Row>
            </Grid>

            <Button color="red" href="/tours">View all tours</Button>
        </Container>

    )
}

export default HomeTopRatedTours;