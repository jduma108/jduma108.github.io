import React from 'react';
import Slide from 'react-reveal/Slide';
 
import './itemRight.css'

const ItemRight = ({project, role, image, imageStyle, projectStyle, roleStyle}) => (
    <div className="portfolioItemWrapper">
        <Slide right>
            <img className={imageStyle} src={image} alt={project}/>
            <div className="textWrapper">
                <h3 className={projectStyle}>{project}</h3>
                <h4 className={roleStyle}>{role}</h4>
            </div>
        </Slide>
    </div>
);

export default ItemRight;