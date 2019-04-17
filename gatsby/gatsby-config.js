module.exports = {
	siteMetadata: {
		title: `Metaltracker`,
		description: ``,
		author: `@frufus`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Metaltracker`,
				short_name: `MT`,
				start_url: `/`,
				background_color: `#373F46`,
				theme_color: `#A5B1BA`,
				display: `minimal-ui`,
				icon: `src/assets/Logo_white.svg`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
				// This type will contain remote schema Query type
				typeName: 'Craft',
				// This is field under which it's accessible
				fieldName: 'craft',
				// Url to query from
				url: 'http://local.metaltracker.de/graphql',
				// HTTP headers
				headers: {
					// Learn about environment variables: https://gatsby.dev/env-vars
					Authorization: `bearer gBKFWvKnCS5hHEm8W4Yw4NW9xhR6oDgUVTkcoFZH8oPSp27tRMGMtI-0EXw1s0ZW`,
				},
				refetchInterval: 1,
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@assets': 'src/assets',
					'@scss': 'src/assets/scss',
					'@components': 'src/components',
					'@pages': 'src/pages',
				},
				extensions: ['js', 'scss']
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	],
};
