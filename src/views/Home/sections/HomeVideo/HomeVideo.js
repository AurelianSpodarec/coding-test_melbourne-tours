import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import './HomeVideo_styles.scss';

function HomeVideo() {
    return (
        <div className="landing-video">


            <div className="landing-video__wrap">
                {/* <img className="landing-video__top-frame" src="https://wildrenfrew.com/wp-content/themes/2019-wildrenfrew/assets/images/textures/texture-top.png" /> */}

                <div className="landing-video__block"></div>
                <iframe className="landing-video__video" src="https://player.vimeo.com/video/396573698?autoplay=1&loop=1&autopause=0&muted=1" width="100%" height="500px" frameborder="0" ></iframe>
                <div className="landing-video__caption">
                    <h2 className="landing-video__caption-title">Tours in Melebourne</h2>
                    <p>Explore one of the best world class tours in the world, based in Melebourne!</p>
                    <Button basic color='green' size="large">See Tours</Button>
                </div>

                <svg className="landing-video__bottom-frame" viewBox="0 0 1440 120"><path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg>
            </div>
        </div >
    )
}

export default HomeVideo;