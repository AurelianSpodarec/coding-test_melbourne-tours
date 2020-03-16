import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMalibourneTours } from '../../services/api/tours';
import { Banner, TourItem } from '../../components';

import { Grid, Image, Dropdown, Container, Input } from 'semantic-ui-react'
import { ToursListContext } from './../../context/ToursListContext';

import './ToursView_styles.scss';


function ToursView() {
    const [toursList, setToursList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const toursProvider = useContext(ToursListContext)
    console.log("Tours view context:", toursProvider)

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
                <Grid.Column mobile={16} tablet={8} computer={5} padded style={{ 'margin-bottom': '32px' }} key={i}>
                    <TourItem loading />
                </Grid.Column>
            )
        } else if (toursList.length) {
            return toursList.map(tour =>
                <Grid.Column mobile={16} tablet={8} computer={5} padded style={{ 'margin-bottom': '32px' }} key={tour.id}>
                    <TourItem tour={tour} />
                </Grid.Column>
            )
        }

        return "Not tours found. Please comeback later. :-("
    }

    return (
        <div>
            <Banner
                title="Tours"
                image="/assets/images/banners/tours-banner.jpg"
            />
            <Container>
                <Grid>
                    <Grid.Column width={5}>
                        <aside>
                            <Input />
                        </aside>
                    </Grid.Column>

                    <Grid.Column width={11}>

                        <Grid columns="one">
                            <Grid.Row>

                                <Input placeholder="Search by name" />

                                <Dropdown text='Price'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='Default' />
                                        <Dropdown.Item text='Low to High' />
                                        <Dropdown.Item text='High to Low' />
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown text='Sort By'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='Price' />
                                        <Dropdown.Item text='Rating' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid.Row>


                        </Grid>

                        <Grid>
                            {/* <Grid.Row> */}
                            {renderMalbourneTours()}
                            {/* </Grid.Row> */}
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Container >
        </div >
    )
}

export default ToursView;