import React, { useState } from 'react';
import { Card, Grid, Image, Icon, Placeholder } from 'semantic-ui-react'

import './LikeHeart_styles.scss';

const LikedHeart = ({ className }) => {

    const [liked, setLiked] = useState(false)

    function onLike() {
        //TODO: Get the user ID, get the post ID and store it in the user database. For now just toggle
        setLiked(!liked)
    }

    return (
        // <div className="liked-heart__heart-wrap">
        <div className={className} onClick={onLike}>
            <Icon className="liked-heart__icon" style={{ 'margin': 0, 'color': `${liked ? '#e22020' : '#fff'}` }} name={`heart ${liked ? '' : 'outline'}`} />
        </div>
    )
}

export default LikedHeart;