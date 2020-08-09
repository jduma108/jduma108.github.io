import React from 'react';
import ItemLeft from '../itemLeft/itemLeft';
import ItemRight from '../itemRight/itemRight';
import ProjectDescription from '../projectDescription/projectDescription';

import enklu from '../../assests/images/portfolio/enklu.png';
import southwest from '../../assests/images/portfolio/southwest.png';
import tigerCenter from '../../assests/images/portfolio/tigerCenter.png';
import adminConsole from '../../assests/images/portfolio/adminConsole.png';
import phlote from '../../assests/images/portfolio/phlote.png';
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
            description: '',
            image1: '', 
            image2: '',
            image3: '', 
            image4: ''
        }

        this.handleShowProject = this.handleShowProject.bind(this);
    }

    handleShowProject = (projectName, role, description) => {
        this.setState({
            showProject: !this.state.showProject,
            projectName: projectName,
            role: role,
            description: description
        })
    }

    render() {
        const {showProject, projectName, role, description} = this.state
        return (
            <div id="portfolioContainer">
                {
                showProject ? 
                    <ProjectDescription
                        handleBackButton={this.handleShowProject}
                        projectName={projectName}
                        role={role}
                        description={description}
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
                                    "Enklu",
                                    "Web & Graphic Design",
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                )}
                            }
                        />
                        <ItemRight
                            projectLine1="Southwest"
                            projectLine2={false}
                            image={southwest}
                            imageStyle="swImage"
                            altTag="southwest"
                            projectLine1Style="sw1Project"
                            projectLine2Style=""
                        />
                        <ItemLeft
                            projectLine1="Tiger"
                            projectLine2="Center"
                            image={tigerCenter}
                            imageStyle="tcImage"
                            altTag="tigerCenter"
                            projectLine1Style="tc1Project"
                            projectLine2Style="tc2Project"
                        />
                        <ItemRight
                            projectLine1="Priority"
                            projectLine2="Thinking"
                            image={adminConsole}
                            imageStyle="acImage"
                            altTag="priorityThinking"
                            projectLine1Style="ac1Project"
                            projectLine2Style="ac2Project"
                        />
                        <ItemLeft
                            projectLine1="PHLOTE"
                            projectLine2={false}
                            image={phlote}
                            imageStyle="nasaImage"
                            altTag="phlote"
                            projectLine1Style="nasaProject"
                            projectLine2Style=""
                        />
                        <ItemRight
                            projectLine1="Gig"
                            projectLine2="Reporter"
                            image={gigReporter}
                            imageStyle="grImage"
                            altTag="gigReporter"
                            projectLine1Style="gr1Project"
                            projectLine2Style="gr2Project"
                        />
                        <ItemLeft
                            projectLine1="Connect"
                            projectLine2={false}
                            image={connectRedesign}
                            imageStyle="connectImage"
                            altTag="connect"
                            projectLine1Style="connectProject"
                            projectLine2Style=""
                        />
                        <ItemRight
                            projectLine1="Brand"
                            projectLine2="Guide"
                            image={brandGuide}
                            imageStyle="brandImage"
                            altTag="brandGuide"
                            projectLine1Style="brand1Project"
                            projectLine2Style="brand2Project"
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Portfolio;