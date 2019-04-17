import React from 'react';
import { graphql } from 'gatsby';
import Container from '@components/Container/Container';
import SEO from '@components/Util/Seo';
import ConcertList from '@components/ConcertList/ConcertList';

const IndexPage = ({ data }) => {
	return (
		<Container>
			<SEO title="Home"/>
			<ConcertList concerts={data.craft.entries}/>
		</Container>
	);
};

export default IndexPage;

export const query = graphql`
{
  craft {
    entries(section: [konzert], orderBy: "date") {
      ... on Craft_Konzert {
        title
        slug
        date
        entryTime
        startTime
        locationConnection {
          entries {
            title
            slug
          }
        }
        bandsConnection {
          entries {
            title
            slug
          }
        }
        info {
          content
        }
      }
    }
  }
}`;