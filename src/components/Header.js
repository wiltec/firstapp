import React from 'react';
import image from '../images/home-bg.jpg';
import PropTypes from 'prop-types';

function Header({cover}) {
	const url = cover ? cover:image;
	return (
		<header className="masthead" style={{backgroundImage:`url(${image})`}}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<div className="site-heading">
							<h1>Clean Blog</h1>
							<span className="subheading">A Blog Theme by Start Bootstrap</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	)

}

Header.propTypes = {
	cover: PropTypes.string.isRequired
};

Header.defaultProps = {
	cover:image
};

export default Header;