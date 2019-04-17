import React from 'react';

import Container from '../components/Container/Container';
import SEO from '../components/Util/Seo';

const NotFoundPage = () => (
	<Container>
		<SEO title="404: Not found"/>
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Container>
);

export default NotFoundPage;
