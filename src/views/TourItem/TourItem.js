import React from 'react';
import { Card, Grid, Image, Icon } from 'semantic-ui-react'

import './TourItem_styles.scss';

const TourItem = ({ tour, loading }) => {

    if (loading) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <Card>

            <div className="tour-item__image-wrap">
                <Icon className="tour-item__heart" name="heart outline" />
                <Image className="tour-item__image" src={tour.images[0].source_url} />
            </div>

            <Card.Content>
                <div>
                    <Card.Meta>{tour.vendor}</Card.Meta>
                    <Card.Header>{tour.name}</Card.Header>
                </div>

                <div>
                    {tour.score.toFixed(2)}
                    <Icon icon="star" />
                </div>
                A$ {tour.price.amount}
            </Card.Content>

            {/* {tour.price.currency}  */}
        </Card>
    )
}

export default TourItem;