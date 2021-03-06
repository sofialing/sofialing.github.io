/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Sofia Ling',
    subtitle: 'Hello, I\'m a Web Developer and Designer',
    description: 'Currently studying at Medieinstitutet in Malmö, Sweden.',
    linkedin_url: 'https://www.linkedin.com/in/sofia-ling-118a19a8/',
    github_url: 'https://github.com/sofialing',
    dribbble_url: 'https://dribbble.com/sofialing',
  },
}
