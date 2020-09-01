import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import PortfolioPage from './pages/portfolio/portfolio';
import NotFoundPage from './pages/notFound/notFound';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={PortfolioPage} />
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
