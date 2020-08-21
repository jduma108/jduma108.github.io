import React from 'react';
import Fade from 'react-reveal/Fade';

import email from '../../assests/images/email_g.svg';
import linkedin from '../../assests/images/linkedin_g.svg';
import resume from '../../assests/images/resume_g.svg';
import resumePdf from '../../assests/pdfs/DumaResume.pdf';
import github from '../../assests/images/github_g.svg';

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
                        <p className="aboutText">My name is Jill! I'm an aspiring front-end web developer and visual designer based in Chicago. I am passionate about blending the world of tech and design to create content that is accessible for all people. I enjoy being challenged and experiencing new opportunities. If you are interested in working with me or getting to know more about my work, please feel free to contact me!</p>
                    </Fade>
                    <Fade bottom>
                        <div className="iconWrapper">
                            <a href="mailto:jduma108@gmail.com"><img src={email} alt="email" className="aboutIcons"/></a>
                            <a href="https://www.linkedin.com/in/jillian-duma-174394112/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="aboutIcons"/></a>
                            <a href="https://github.com/jduma108" target="_blank" rel="noopener noreferrer"><img src={github} alt="linkedin" className="aboutIcons"/></a>
                            <a href={resumePdf} target="_blank" rel="noopener noreferrer"><img src={resume} alt="resume" className="aboutIcons"/></a>
                        </div>
                    </Fade>
                </div>
            </Fade>
        )
    }
}

export default About;