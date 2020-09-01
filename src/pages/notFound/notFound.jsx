import React from 'react';
import './notFound.css';

class NotFoundPage extends React.Component {
	render() {
		return (
			<div className="notFoundWrapper">
				<h1>404 Page Not Found</h1>
				<a href="https://jillianduma.com" className="link">
					Go back to jillianduma.com
				</a>
			</div>
		);
	}
}
export default NotFoundPage;
