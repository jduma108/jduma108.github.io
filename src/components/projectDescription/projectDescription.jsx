import React from 'react';
import Slide from 'react-reveal/Slide';

import tigerCenterPdf from '../../assests/pdfs/tigerCenter.pdf';
import dumaBrandGuide from '../../assests/pdfs/brandGuide.pdf';
import enkluDesktop from '../../assests/pdfs/enkluDesktop.pdf';
import enkluMobile from '../../assests/pdfs/enkluMobile.pdf';
import enkluBrandGuide from '../../assests/pdfs/enkluBrandGuide.pdf';

import './projectDescription.css';

class ProjectDescription extends React.Component {
    render() {
        const { handleBackButton, projectName, role, description1, description2, image1, image2, enklu, southwest, tigerCenter, priorityThinking, phlote, gigReporter, connect, brandGuide } = this.props
        return (
            <Slide left>
                <div className="projectWrapper">
                    <button className="backTop" onClick={handleBackButton}>BACK TO PORTFOLIO</button>
                    <h2 className="project">{projectName}</h2>
                    <h3 className="role">{role}</h3>
                    <p className="description">{description1}</p>
                    <p className="description">{description2}</p>
                    {
                        enklu ? 
                        <div className="enklu">
                            <div className="imageWrapper">   
                                <img src={image1} alt={projectName} className="image1"/>
                                <img src={image2} alt={projectName} className="image2"/>
                            </div>
                            <p className="description">To view more of the designs I created for Enklu, please visit the links below. Please note that some of the designs may no longer be in effect. Click <a className="link" href="https://www.enklu.com/" target="_blank" rel="noopener noreferrer">here</a> to learn more about Enklu.</p>
                            <ul>
                                <li><a href={enkluDesktop} target="_blank" rel="noopener noreferrer" className="link">Enklu official website desktop mockup design</a></li>
                                <li><a href={enkluMobile} target="_blank" rel="noopener noreferrer" className="link" >Enklu official website mobile mockup design</a></li>
                                <li><a href="https://invis.io/NPRJ5Z5MSVX" target="_blank" rel="noopener noreferrer" className="link">Enklu mobile app demo on Invision</a></li>
                                <li><a href={enkluBrandGuide} target="_blank" rel="noopener noreferrer" className="link" >Enklu Brand Guide</a></li>
                            </ul>
                        </div>
                        : southwest ?
                        <div className="southwest">
                            <p className="description">Click <a href="https://vimeo.com/swauniversity/review/284751888/bc02cfaf3c" target="_blank" rel="noopener noreferrer" className="link">here</a>  to view the ETOPS training video.</p>
                            <img src={image1} alt={projectName}/>
                        </div>
                        : tigerCenter ? 
                        <div className="tigerCenter">
                            <p className="description">Click <a href="https://tigercenter.rit.edu/tigerCenterApp/landing" target="_blank" rel="noopener noreferrer" className="link">here</a> to view the redesigned website and visit this <a href={tigerCenterPdf} target="_blank" className="link" rel="noopener noreferrer">link</a> to view the wire-frame documentation.</p>
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
                        : gigReporter ? 
                        <div className="gigReporter">
                            <p className="description">Click <a href="http://jillianduma.com/gig-reporter/" target="_blank" rel="noopener noreferrer" className="link">here</a> to view the website. Please note: The project has recently been updated using React framework and Axios for the API calls.</p>
                            <img src={image1} alt={projectName}/>
                        </div>
                        : connect ? 
                        <div className="connect">
                            <p className="description">Click <a href="http://jillianduma.com/connect-redesign/" target="_blank" rel="noopener noreferrer" className="link">here</a> to view the redesign website. Please note: The original Connect website has been rebranded to RIT School of Media Sciences and follows a different style than my redesign was based off of.</p>
                            <img src={image1} alt={projectName}/>
                        </div>
                        : brandGuide ? 
                        <div className="brandGuide">
                            <p className="description">Click <a href={dumaBrandGuide} target="_blank" rel="noopener noreferrer" className="link">here</a> to view the full brand style guide.</p>
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