import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';

import downArrow from '../../assests/images/down-arrow.svg';
import './landing.css';

class Landing extends React.Component {
    constructor(){
        super();

        this.state = {
            skillTitles: ["front-end developer", "visual designer", "web designer", "graphic designer"]
        }

    }
    render() {
        const { skillTitles } = this.state
        return (
            <div className="landing">
                <Fade top cascade>
                    <h1 className="title">DUMA</h1>
                </Fade>
                <ReactTypingEffect
                    text={skillTitles}
                    speed={100}
                    eraseDelay={500}
                    typingDelay={500}
                    className="skillTitles"
                />
                <div className="bounce">
                    <img src={downArrow} className="downArrow" alt="down-arrow"/>
                </div>
            </div>
        )
    }
}

export default Landing;