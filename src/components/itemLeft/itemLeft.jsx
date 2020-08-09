import React from 'react';
import Slide from 'react-reveal/Slide';
 
import './itemLeft.css'

class ItemLeft extends React.Component {
    render(){
        const { projectLine1, projectLine2, image, imageStyle, altTag, projectLine1Style, projectLine2Style, openProject } = this.props
        return(
            <button className="leftItemWrapper" onClick={openProject}>
                <Slide left>
                    <img className={imageStyle} src={image} alt={altTag}/>
                    <div className="textWrapper">
                        <h3 className={projectLine1Style}>{projectLine1}</h3>
                        {
                            projectLine2 === false? null : <h3 className={projectLine2Style}>{projectLine2}</h3>
                        }
                    </div>
                </Slide>
            </button>
        )
    }
}

export default ItemLeft;