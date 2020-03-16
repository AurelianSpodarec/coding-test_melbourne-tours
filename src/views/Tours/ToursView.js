import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMalibourneTours } from '../../services/api/tours';
import { Banner, TourItem } from '../../components';

import { Grid, Image, Dropdown, Container, Input } from 'semantic-ui-react'
import { ToursListContext } from './../../context/ToursListContext';

import './ToursView_styles.scss';


function ToursView() {
    // const [toursList, setToursList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedOrder, setSelectedOrder] = useState("Sort by")
    const toursProvider = useContext(ToursListContext)
    console.log("Tours view context:", toursProvider)

    // useEffect(() => {
    //     const fetchTours = async () => {
    //         const result = await getMalibourneTours();
    //         setToursList(result.results)
    //         setIsLoading(false)
    //     };
    //     fetchTours();
    // }, [])

    function renderMalbourneTours() {
        if (toursProvider.isLoading) {
            return [...Array(9)].map((x, i) =>
                <Grid.Column mobile={16} tablet={8} computer={5} padded style={{ 'margin-bottom': '32px' }} key={i}>
                    <TourItem loading />
                </Grid.Column>
            )
        } else if (toursProvider.toursList.length) {
            return toursProvider.toursList.map(tour =>
                <Grid.Column mobile={16} tablet={8} computer={5} padded style={{ 'margin-bottom': '32px' }} key={tour.id}>
                    <TourItem tour={tour} />
                </Grid.Column>
            )
        }

        return "Not tours found. Please comeback later. :-("
    }

    function selectedOrderText(data) {
        toursProvider.changeRatingOrder(data.value)
        setSelectedOrder(data.text)
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
                                {/* <input name="name" onChange={(e) => toursProvider.changeTitle(e)} value={toursProvider.tourFilter.name} placeholder="Search by name" /> */}
                                <Input name="name" onChange={(e) => toursProvider.changeTitle(e.target.value)} value={toursProvider.tourFilter.name} placeholder="Search by name" />

                                <div>
                                    <p>Price</p>

                                    {/* Min<Input onChange={(e, name) => toursProvider.changePrice(e.target.value, name)} name="min" value={toursProvider.tourFilter.price[0]} /> */}
                                    {/* Max<Input onChange={(e, name) => toursProvider.changePrice(e.target.value, name)} name="max" value={toursProvider.tourFilter.price[1]} /> */}
                                </div>


                                <Dropdown text={selectedOrder}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => selectedOrderText({ value: '-score', text: "Rating(High to low)" })} text='Rating(High to low)' />
                                        <Dropdown.Item onClick={() => selectedOrderText({ value: 'score', text: "Rating(Low to High)" })} text='Rating(Low to High)' />
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