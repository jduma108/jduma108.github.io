import React from 'react';
import Slide from 'react-reveal/Slide';

import tigerCenterPdf from '../../assests/pdfs/tigerCenter.pdf';

import './projectDescription.css';

class ProjectDescription extends React.Component {
    render() {
        const { handleBackButton, projectName, role, description, image1, enklu, southwest, tigerCenter, priorityThinking, phlote, gigReporter, connect, brandGuide } = this.props
        return (
            <Slide left>
                <div className="projectWrapper">
                    <button className="backTop" onClick={handleBackButton}>BACK TO PORTFOLIO</button>
                    <h2 className="project">{projectName}</h2>
                    <h3 className="role">{role}</h3>
                    <p className="description">{description}</p>
                    {
                        southwest ?
                        <div className="southwest">
                            <p className="description">Click <a href="https://vimeo.com/swauniversity/review/284751888/bc02cfaf3c" target="_blank" rel="noopener noreferrer" className="link">here</a>  to view the ETOPS training video.</p>
                            <img src={image1} alt={projectName}/>
                        </div>
                        : tigerCenter ? 
                        <div className="tigerCenter">
                            <p className="description">To see the rediesnged website please visit <a href="https://tigercenter.rit.edu/tigerCenterApp/landing" target="_blank" rel="noopener noreferrer" className="link">tigercenter.rit.edu</a> and to see the wireframe documentation, click <a href={tigerCenterPdf} target="_blank" className="link" rel="noopener noreferrer">here</a>.</p>
                            <img src={image1} alt={projectName}/>
                        </div>
                        : priorityThinking ? 
                        <div className="priorityThinking">
                            <p className="description">Click <a href="https://invis.io/GKQODWIRA29" target="_blank" rel="noopener noreferrer" className="link">here</a> to view a demo of the wireframe design on InVision.</p>
                            <img src={image1} alt={projectName}/>
                        </div>
                        : phlote ? 
                        <div className="phlote">
                            <p className="description">Click <a href="https://www.nasa.gov/directorates/spacetech/niac/2017_Phase_I_Phase_II/PHLOTE/" target="_blank" rel="noopener noreferrer" className="link">here</a> to learn more about the NASA Mission.</p>
                            <img src={image1} alt={projectName}/>
                        </div>
                        : connect ? 
                        <div className="connect">
                            <p className="description">Click <a href="http://jillianduma.com/connect-redesign/" target="_blank" rel="noopener noreferrer" className="link">here</a> to view the redesign website. Please note: The original Connect website has been rebranded to RIT School of Media Sciences and follows a different style that my redesign was based off of.</p>
                            <img src={image1} alt={projectName}/>
                        </div>
                        : null
                    }
                    <button className="backBottom" onClick={handleBackButton}>BACK TO PORTFOLIO</button>
                </div>
            </Slide>
        )
    }
}

export default ProjectDescription;