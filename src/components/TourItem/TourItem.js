import React from 'react';
import { Card, Grid, Image, Icon, Placeholder } from 'semantic-ui-react'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import LikedHeart from './../LikeHeart/LikeHeart';

import './TourItem_styles.scss';

const TourItem = ({ tour, loading }) => {

    if (loading) {
        return (
            <Placeholder fluid>
                <Placeholder.Header image>

                </Placeholder.Header>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
            </Placeholder>
        )
    }

    function onLike() {
        //TODO: Get user. Assign the tour ID to user database 'likedTours';
    }

    return (
        <Card className="tour-item" key={tour.id}>

            <div className="tour-item__image-wrap">

                <LikedHeart className="tour-item__heart" />

                <Link to={`/tours/${tour.id}`}>

                    {tour.images && <Image className="tour-item__image" src={tour.images[0].source_url} />}
                </Link>
            </div>
            <Link className="tour-item__content-link" to={`/tours/${tour.id}`}>

                <Card.Content className="tour-item__content">
                    <div className="tour-item__header">
                        <Card.Meta>{tour.vendor}</Card.Meta>
                        <Card.Header className="tour-item__title">{tour.name}</Card.Header>
                    </div>

                    <div className="tour-item__footer">
                        <div className="tour-item__rating-wrap">
                            <Icon className="tour-item__rating-icon" name="star" />
                            <p className="tour-item__rating-score">{tour.score && tour.score.toFixed(2)}</p>
                        </div>
                        <div className="tour-item__price-wrap">
                            <p>A$ {tour.price && tour.price.amount}</p>
                        </div>
                    </div>
                </Card.Content>

                {/* {tour.price.currency}  */}
            </Link>
        </Card>
    )
}

export default TourItem;