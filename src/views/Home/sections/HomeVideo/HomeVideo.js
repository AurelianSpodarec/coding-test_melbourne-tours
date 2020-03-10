import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import './HomeVideo_styles.scss';

function HomeVideo() {
    return (
        <div className="landing-video">

            <img src="https://wildrenfrew.com/wp-content/themes/2019-wildrenfrew/assets/images/textures/texture-top.png" />

            <div className="landing-video__wrap">
                <div className="landing-video__block"></div>

                <iframe className="landing-video__video" src="https://player.vimeo.com/video/396573698?autoplay=1&loop=1&autopause=0&muted=1" width="100%" height="500px" frameborder="0" ></iframe>
                <div className="landing-video__caption">
                    <Header size='huge'>Tours in Melebourne</Header>
                    <p>Explore one of the best world class tours in the world, based in Melebourne!</p>
                    <Button basic color='green'>See Tours</Button>
                </div>
            </div>
        </div>
    )
}

export default HomeVideo;