import React from 'react';
import Fade from 'react-reveal/Fade';

import './about.css';

class About extends React.Component {
    render() {
        return (
            <Fade bottom>
                <div className="aboutWrapper">
                <Fade bottom>
                    <h1 className="aboutTitle">HELLO</h1>
                </Fade>
                <Fade bottom>
                    <p className="aboutText">My name is Jill! I'm an aspiring front-end web developer and visual designer based in Chicago. I am passionate about blending the world of tech and deisgn to create content that is accessible for all people. I enjoy being challenged and experiencing new opportunities. If you are interested in working with me or getting to know more about my work, please feel free to contact me!</p>
                </Fade>
                </div>
            </Fade>
        )
    }
}

export default About;