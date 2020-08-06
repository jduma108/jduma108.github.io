import React from 'react';
import Roll from 'react-reveal/Roll';
 
import './itemLeft.css'

const ItemLeft = ({project, role, image}) => (
    <div className="portfolioItemWrapper">
        <Roll left>
            <img className="image" src={image} alt={project}/>
        </Roll>
        <Roll left>
            <div className="text">
                <h3 className="project">{project}</h3>
                <h4 className="role">{role}</h4>
            </div>
        </Roll>
    </div>
);

export default ItemLeft;