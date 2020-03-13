import React, { useEffect, useState } from 'react';
import { getMalibourneTours } from '../../services/api/tours';
import { Grid, Image, Container } from 'semantic-ui-react'
import TourItem from './../TourItem/TourItem';

function ToursView() {
    const [toursList, setToursList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTours = async () => {
            const result = await getMalibourneTours();
            setToursList(result.results)
            setIsLoading(false)
        };
        fetchTours();
    }, [])


    function renderMalbourneTours() {
        if (isLoading) {
            return [...Array(9)].map((x, i) =>
                <Grid.Column>
                    <TourItem loading />
                </Grid.Column>
            )
        } else if (toursList.length) {
            return toursList.map(tour =>
                <Grid.Column>
                    <TourItem tour={tour} />
                </Grid.Column>
            )
        }

        return "Not tours found. Please comeback later. :-("
    }


    return (
        <div>
            <Container>
                <Grid>
                    <Grid.Column width={5}>
                        <aside>
                            Filter
                    </aside>
                    </Grid.Column>

                    <Grid.Column width={11}>
                        <Grid columns='two' divided>
                            <Grid.Row>
                                {renderMalbourneTours()}
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Container >
        </div >
    )
}

export default ToursView;