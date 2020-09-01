import React from 'react';
import { Ripple } from 'react-preloaders';

import Landing from '../../components/landing/landing';
import About from '../../components/about/about';
import Porfolio from '../../components/portfolio/portfolio';
import Footer from '../../components/footer/footer';

import './portfolio.css';

class PortfolioPage extends React.Component {
	render() {
		return (
			<div className="portfolioPageWrapper">
				<div className="mainContentWrapper">
					<Landing />
					<About />
					<Porfolio />
					<Footer />
				</div>
				<Ripple
					background="rgb(2, 5, 36)"
					color={'#00605c'}
					animation="slide-down"
				/>
			</div>
		);
	}
}

export default PortfolioPage;
