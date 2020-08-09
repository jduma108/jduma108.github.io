import React from 'react';
import Slide from 'react-reveal/Slide';

import './projectDescription.css';

class ProjectDescription extends React.Component {
    render() {
        const { handleBackButton, projectName, role, description } = this.props
        return (
            <Slide left>
                <div className="projectWrapper">
                    <button className="back" onClick={handleBackButton}>BACK TO PORTFOLIO</button>
                    <h2 className="project">{projectName}</h2>
                    <h3 className="role">{role}</h3>
                    <p className="description">{description}</p>
                </div>
            </Slide>
        )
    }
}

export default ProjectDescription;