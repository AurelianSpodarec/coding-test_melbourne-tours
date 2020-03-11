import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
const TourItem = ({ tour, loading }) => {

    if (loading) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <div>



            <h1>{tour.name}</h1>
            {tour.score.toFixed(1)} ||
            {tour.price.currency} {tour.price.amount}
            <Image src={tour.images[0].source_url} />
            {tour.vendor}
        </div>
    )
}

export default TourItem;