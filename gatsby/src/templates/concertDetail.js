import React from 'react';
import Container from '@components/Container/Container';
import SEO from '@components/Util/Seo';
import RichContent from '@components/RichContent/RichContent';

const ConcertDetailPage = (props) => {
	console.log('props', props);

	const { pageContext } = props;
	return (
		<Container>
			<SEO title={pageContext.title}/>
			<h2>{pageContext.title}</h2>
			<RichContent content={pageContext.info.content}/>
		</Container>
	);
};

export default ConcertDetailPage;

