/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

// basic css
import '@scss/reset.scss';
import '@scss/styles.scss';
import '@scss/util.scss';
import '@scss/util/font-styles.scss';

import './container.scss'


const Container = (props) => (
	<StaticQuery
		query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
		render={data => (
			<div className={`o-container`}>
				<Header siteTitle={data.site.siteMetadata.title}/>
				<main className="o-container__main">{props.children}</main>
				<Footer />
			</div>
		)}
	/>
);

Container.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Container;
