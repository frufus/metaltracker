import React from 'react';
import Container from '@components/Container/Container';
import SEO from '@components/Util/Seo';
import RichContent from '@components/RichContent/RichContent';
import ConcertList from '@components/ConcertList/ConcertList';

const BandDetailPage = (props) => {
	console.log('props', props);

	const { pageContext } = props;
	return (
		<Container>
			<SEO title={pageContext.title}/>
			<h2>{pageContext.title}</h2>
			<RichContent content={pageContext.info.content}/>
			<ConcertList concerts={pageContext.concerts}/>
		</Container>
	);
};

export default BandDetailPage;

