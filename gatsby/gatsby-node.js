const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const bandDetailPage = path.resolve('src/templates/bandDetail.js');
	const locationDetailPage = path.resolve('src/templates/locationDetail.js');
	const concertDetailPage = path.resolve('src/templates/concertDetail.js');

	const bandPages = graphql(`
	query getBands($slug: String) {
		craft {
			entriesConnection(slug: $slug, section: band) {
				edges {
					node {
						... on Craft_Band {
							id
							title
							slug
							info {
								content
							}
						}
					}
					concerts: relatedEntries(section: konzert) {
						edges {
							node {
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
					}
				}
			}
		}
	}`).then(result => {
		if (result.errors) {
			throw result.errors;
		}
		
		result.data.craft.entriesConnection.edges.forEach(band => {
			const { node } = band;
			const concerts = band.concerts.edges.map((edge) => edge.node);
			createPage({
					path: `band/${node.slug}`,
					component: bandDetailPage,
					context: {
						...node,
						concerts
					}
				},
			);
		});
	});

	const locationPages = graphql(`
	query getLoctions($slug: String) {
		craft {
			entriesConnection(slug: $slug, section: location) {
				edges {
					node {
						... on Craft_Location {
							title
							slug
							info {
								content
							}
						}
					}
					concerts: relatedEntries(section: konzert) {
						edges {
							node {
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
					}
				}
			}
		}
	}
`).then(result => {
		if (result.errors) {
			throw result.errors;
		}

		result.data.craft.entriesConnection.edges.forEach(location => {
			const { node } = location;
			const concerts = location.concerts.edges.map((edge) => edge.node);
			createPage({
					path: `location/${node.slug}`,
					component: locationDetailPage,
					context: {
						...node,
						concerts
					}
				},
			);
		});
	});

	const concertPages = graphql(`
	{
		craft {
			entries(section: [konzert]) {
				... on Craft_Konzert {
					title
					slug
					date
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
	}`).then(result => {
		if (result.errors) {
			throw result.errors;
		}

		result.data.craft.entries.forEach(concert => {
			createPage({
					path: `concert/${concert.slug}`,
					component: concertDetailPage,
					context: {
						...concert,
					}
				},
			);
		});
	});

	return Promise.all([bandPages, locationPages, concertPages]);
};