import React from 'react';

import email from '../../assests/images/email.svg';
import linkedin from '../../assests/images/linkedin.svg';
import resume from '../../assests/images/resume.svg';
import resumePdf from '../../assests/pdfs/DumaResume.pdf';

import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footerWrapper">
                <p className="copyRight">© Jillian Duma All Rights Reserved</p>
                <div className="footerIconWrapper">
                    <a href="mailto:jduma108@gmail.com"><img src={email} alt="email" className="footerIcons"/></a>
                    <a href="https://www.linkedin.com/in/jillian-duma-174394112/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="footerIcons"/></a>
                    <a href={resumePdf} target="_blank" rel="noopener noreferrer"><img src={resume} alt="resume" className="footerIcons"/></a>
                </div>
            </div>
        )
    }
}

export default Footer;