import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';

import paint from '../../assests/video/paint.mp4';
import downArrow from '../../assests/images/down-arrow.svg';
import './landing.css';

class Landing extends React.Component {
    render() {
        const skillTitles = ["front-end developer", "visual designer", "web designer", "graphic designer"]
        return (
            <div className="landingWrapper">
                <video autoPlay loop className="paint">
                    <source src={paint} type="video/mp4"></source>
                </video>

                <Fade top cascade>
                    <h1 className="title">DUMA</h1>
                    <ReactTypingEffect
                        text={skillTitles}
                        speed={100}
                        eraseDelay={500}
                        typingDelay={500}
                        className="skillTitles"
                    />
                </Fade>
                <div className="bounce">
                    <img src={downArrow} className="downArrow" alt="down-arrow"/>
                </div>
            </div>
        )
    }
}

export default Landing;