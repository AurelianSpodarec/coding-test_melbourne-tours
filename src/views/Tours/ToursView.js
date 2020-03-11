import React, { useEffect, useState } from 'react';
import { getMalibourneTours } from '../../services/api/tours';
import { Grid, Image } from 'semantic-ui-react'
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
            <aside>
                Filter
            </aside>

            <section>
                <Grid stackable columns={3} divided>
                    <Grid.Row>
                        {renderMalbourneTours()}
                    </Grid.Row>
                </Grid>
            </section>
        </div>
    )
}

export default ToursView;