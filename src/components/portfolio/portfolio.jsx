import React from 'react';
import ItemLeft from '../itemLeft/itemLeft';

import enklu from '../../assests/images/portfolio/enklu.png';

import './portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <ItemLeft
                project="Enklu"
                role="Web & Graphic Design"
                image={enklu}
            />
        )
    }
}

export default Portfolio;