import React from 'react';
import ItemLeft from '../itemLeft/itemLeft';
import ItemRight from '../itemRight/itemRight';
import ProjectDescription from '../projectDescription/projectDescription';

import PORTFOLIO_DATA from '../../data/porfolioData';

import enklu from '../../assests/images/portfolio/enklu.png';
import enkluDesigns from '../../assests/images/portfolio/enkluDesigns.png';
import southwest from '../../assests/images/portfolio/southwest.png';
import southwest2 from '../../assests/images/portfolio/southwest2.png';
import tigerCenter from '../../assests/images/portfolio/tigerCenter.png';
import tigerCenter2 from '../../assests/images/portfolio/tigerCenter2.png';
import adminConsole from '../../assests/images/portfolio/adminConsole.png';
import phlote from '../../assests/images/portfolio/phlote.png';
import phlote2 from '../../assests/images/portfolio/phlote2.png';
import gigReporter from '../../assests/images/portfolio/gigReporter.png';
import connectRedesign from '../../assests/images/portfolio/connect.png';
import brandGuide from '../../assests/images/portfolio/brandGuide.png';

import './portfolio.css';

class Portfolio extends React.Component {
    constructor(){
        super();

        this.state={
            showProject: false,
            projectName: '',
            role: '',
            description1: '',
            description2: '',
            image1: '', 
            image2: '',
            isEnklu: false,
            isSouthwest: false,
            isTigerCenter: false,
            isPriority: false,
            isPhlote: false,
            isGigReporter: false,
            isConnect: false,
            isBrandGuide: false
        }

        this.handleShowProject = this.handleShowProject.bind(this);
        this.myRef = React.createRef();  
    }

    handleShowProject = (projectName, role, description1, description2, image1, image2) => {
        window.scrollTo(0, this.myRef.current.offsetTop)  
        this.setState({
            showProject: true,
            projectName: projectName,
            role: role,
            description1: description1,
            description2: description2,
            image1: image1,
            image2: image2
        })
        if (projectName === "Enklu") {
            this.setState({isEnklu: true})
        } else if (projectName === "Southwest") {
            this.setState({isSouthwest: true})
        } else if (projectName === "Tiger Center") {
            this.setState({isTigerCenter: true})
        } else if (projectName === "Priority Thinking") {
            this.setState({isPriority: true})
        } else if (projectName === "PHLOTE") {
            this.setState({isPhlote: true})
        } else if (projectName === "Gig Reporter") {
            this.setState({isGigReporter: true})
        } else if (projectName === "Connect") {
            this.setState({isConnect: true})
        } else if (projectName === "Brand Style Guide") {
            this.setState({isBrandGuide: true})
        } 
    }

    handleBackButton = () => {
        this.setState({
            showProject: false,
            isEnklu: false,
            isSouthwest: false,
            isTigerCenter: false,
            isPriority: false,
            isPhlote: false,
            isGigReporter: false,
            isConnect: false,
            isBrandGuide: false
        })
    }

    render() {
        const {showProject, projectName, role, description1, description2, image1, image2, isEnklu, isSouthwest, isTigerCenter, isPriority, isPhlote, isGigReporter, isConnect, isBrandGuide} = this.state
        return (
            <div id="portfolioContainer" ref={this.myRef}>
                {
                showProject ? 
                    <ProjectDescription
                        handleBackButton={this.handleBackButton}
                        projectName={projectName}
                        role={role}
                        description1={description1}
                        description2={description2}
                        image1={image1}
                        image2={image2}
                        enklu={isEnklu}
                        southwest={isSouthwest}
                        tigerCenter={isTigerCenter}
                        priorityThinking={isPriority}
                        phlote={isPhlote}
                        gigReporter={isGigReporter}
                        connect={isConnect}
                        brandGuide={isBrandGuide}
                    />
                    :
                    <div className="portfolioWrapper">
                        <ItemLeft
                            projectLine1="Enklu"
                            projectLine2={false}
                            image={enklu}
                            imageStyle="enkluImage"
                            altTag="enklu"
                            projectLine1Style="enkluProject"
                            projectLine2Style=""
                            openProject={() => {
                                this.handleShowProject(
                                    PORTFOLIO_DATA[0].project,
                                    PORTFOLIO_DATA[0].role,
                                    PORTFOLIO_DATA[0].description1,
                                    PORTFOLIO_DATA[0].description2, 
                                    enklu,
                                    enkluDesigns
                                )}
                            }
                        />
                        <ItemRight
                            projectLine1="Southwest"
                            projectLine2={false}
                            image={southwest}
                            imageStyle="swImage"
                            altTag="southwest"
                            projectLine1Style="swProject"
                            projectLine2Style=""
                            openProject={() => {
                                this.handleShowProject(
                                    PORTFOLIO_DATA[1].project,
                                    PORTFOLIO_DATA[1].role,
                                    PORTFOLIO_DATA[1].description1,
                                    PORTFOLIO_DATA[1].description2, 
                                    southwest2
                                )}
                            }
                        />
                        <ItemLeft
                            projectLine1="Tiger"
                            projectLine2="Center"
                            image={tigerCenter}
                            imageStyle="tcImage"
                            altTag="tigerCenter"
                            projectLine1Style="tc1Project"
                            projectLine2Style="tc2Project"
                            openProject={() => {
                                this.handleShowProject(
                                    PORTFOLIO_DATA[2].project,
                                    PORTFOLIO_DATA[2].role,
                                    PORTFOLIO_DATA[2].description1,
                                    PORTFOLIO_DATA[2].description2, 
                                    tigerCenter2
                                )}
                            }
                        />
                        <ItemRight
                            projectLine1="Priority"
                            projectLine2="Thinking"
                            image={adminConsole}
                            imageStyle="acImage"
                            altTag="priorityThinking"
                            projectLine1Style="ac1Project"
                            projectLine2Style="ac2Project"
                            openProject={() => {
                                this.handleShowProject(
                                    PORTFOLIO_DATA[3].project,
                                    PORTFOLIO_DATA[3].role,
                                    PORTFOLIO_DATA[3].description1,
                                    PORTFOLIO_DATA[3].description2, 
                                    adminConsole
                                )}
                            }
                        />
                        <ItemLeft
                            projectLine1="PHLOTE"
                            projectLine2={false}
                            image={phlote}
                            imageStyle="nasaImage"
                            altTag="phlote"
                            projectLine1Style="nasaProject"
                            projectLine2Style=""
                            openProject={() => {
                                this.handleShowProject(
                                    PORTFOLIO_DATA[4].project,
                                    PORTFOLIO_DATA[4].role,
                                    PORTFOLIO_DATA[4].description1,
                                    PORTFOLIO_DATA[4].description2, 
                                    phlote2
                                )}
                            }
                        />
                        <ItemRight
                            projectLine1="Gig"
                            projectLine2="Reporter"
                            image={gigReporter}
                            imageStyle="grImage"
                            altTag="gigReporter"
                            projectLine1Style="gr1Project"
                            projectLine2Style="gr2Project"
                            openProject={() => {
                                this.handleShowProject(
                                    PORTFOLIO_DATA[5].project,
                                    PORTFOLIO_DATA[5].role,
                                    PORTFOLIO_DATA[5].description1,
                                    PORTFOLIO_DATA[5].description2, 
                                    gigReporter
                                )}
                            }
                        />
                        <ItemLeft
                            projectLine1="Connect"
                            projectLine2={false}
                            image={connectRedesign}
                            imageStyle="connectImage"
                            altTag="connect"
                            projectLine1Style="connectProject"
                            projectLine2Style=""
                            openProject={() => {
                                this.handleShowProject(
                                    PORTFOLIO_DATA[6].project,
                                    PORTFOLIO_DATA[6].role,
                                    PORTFOLIO_DATA[6].description1,
                                    PORTFOLIO_DATA[6].description2, 
                                    connectRedesign
                                )}
                            }
                        />
                        <ItemRight
                            projectLine1="Brand"
                            projectLine2="Guide"
                            image={brandGuide}
                            imageStyle="brandImage"
                            altTag="brandGuide"
                            projectLine1Style="brand1Project"
                            projectLine2Style="brand2Project"
                            openProject={() => {
                                this.handleShowProject(
                                    PORTFOLIO_DATA[7].project,
                                    PORTFOLIO_DATA[7].role,
                                    PORTFOLIO_DATA[7].description1,
                                    PORTFOLIO_DATA[7].description2, 
                                    brandGuide
                                )}
                            }
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Portfolio;