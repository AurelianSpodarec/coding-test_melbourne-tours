import React from 'react';

import {
    Button,
    Container,
    Image,
    List,
    Menu,
} from 'semantic-ui-react'

import './Banner_styles.scss';

function Banner({ title, subTitle, image }) {
    return (
        <div className="banner">
            <div className="banner__overlay"></div>
            <Image className="banner__image" src={image} />
            <div className="banner__caption">
                {title && <h1 className="banner__title">{title}</h1>}
                {subTitle && <span> {subTitle}</span>}
            </div>
        </div>
    )
}

export default Banner;