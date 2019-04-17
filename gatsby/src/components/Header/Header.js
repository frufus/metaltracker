import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.scss';

const Header = ({ siteTitle }) => (
	<header className="o-header">
		<div className="o-header__foreground">
			<h1 className="o-header__title">
				<Link
					to="/"
				>
					{siteTitle}
				</Link>
			</h1>
		</div>

	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
