import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './footer.scss';

const Footer = (props) => (
	<footer className="o-footer">
		<div className="o-footer__inner">
			<nav></nav>
		</div>
	</footer>
);

Footer.propTypes = {
	siteTitle: PropTypes.string,
};

Footer.defaultProps = {
	siteTitle: ``,
};

export default Footer;
