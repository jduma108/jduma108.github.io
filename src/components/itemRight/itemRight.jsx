import React from 'react';
import Slide from 'react-reveal/Slide';
 
import './itemRight.css'

const ItemRight = ({projectLine1, projectLine2, image, imageStyle, altTag, projectLine1Style, projectLine2Style}) => (
    <div className="portfolioItemWrapper">
        <Slide right>
            <img className={imageStyle} src={image} alt={altTag}/>
            <div className="textWrapper">
                <h3 className={projectLine1Style}>{projectLine1}</h3>
                {
                    projectLine2 === false? null : <h3 className={projectLine2Style}>{projectLine2}</h3>
                }
            </div>
        </Slide>
    </div>
);

export default ItemRight;