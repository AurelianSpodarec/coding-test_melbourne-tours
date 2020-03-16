import React from 'react';

import { HomeVideo, HomeTopRatedTours } from './sections';

import { Image, Grid } from 'semantic-ui-react'


function Home() {

    return (
        <div>

            <HomeVideo />

            <HomeTopRatedTours />

            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image src="https://newcastlebeach.org/images/melbourne-tour.jpg" />
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Enjoy awesome nightlife!</h2>
                        <p>lorem</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid>
                <Grid.Row columns={2}>

                    <Grid.Column>
                        <h2>Enjoy awesome nightlife!</h2>
                        <p>lorem</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://2.bp.blogspot.com/-sdOoCckeJ0A/UzPJUPuqoCI/AAAAAAAAFXQ/zY3zJjuBa4k/s1600/IMG_2438.JPG" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image src="/assets/images/restaurant-sealife.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Enjoy awesome nightlife!</h2>
                        <p>lorem</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}

export default Home;