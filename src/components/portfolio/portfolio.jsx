import React from 'react';
import ItemLeft from '../itemLeft/itemLeft';
import ItemRight from '../itemRight/itemRight';

import enklu from '../../assests/images/portfolio/enklu.png';
import southwest from '../../assests/images/portfolio/southwest.png';
import tigerCenter from '../../assests/images/portfolio/tigerCenter.png';
import adminConsole from '../../assests/images/portfolio/adminConsole.png';
import phlote from '../../assests/images/portfolio/phlote.png';

import './portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="portfolioWrapper">
                <ItemLeft
                    project="Enklu"
                    role="Web Design"
                    image={enklu}
                    imageStyle="enkluImage"
                    projectStyle="enkluProject"
                    roleStyle="enkluRole"
                />
                <ItemRight
                    project="Southwest"
                    role="Graphic Design"
                    image={southwest}
                    imageStyle="swImage"
                    projectStyle="swProject"
                    roleStyle="swRole"
                />
                <ItemLeft
                    project="Tiger Center"
                    role="Web & Graphic Design"
                    image={tigerCenter}
                    imageStyle="tcImage"
                    projectStyle="tcProject"
                    roleStyle="tcRole"
                />
                <ItemRight
                    project="Priority Thinking"
                    role="Web & Graphic Design"
                    image={adminConsole}
                    imageStyle="acImage"
                    projectStyle="acProject"
                    roleStyle="acRole"
                />
                <ItemLeft
                    project="N.A.S.A."
                    role="Logo Design"
                    image={phlote}
                    imageStyle="nasaImage"
                    projectStyle="nasaProject"
                    roleStyle="nasaRole"
                />
            </div>
        )
    }
}

export default Portfolio;