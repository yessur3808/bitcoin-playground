/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './static/logo.png',
        background_color: `#FFFFFF`,
        theme_color: `#05814d`,
        start_url: `/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'lato:300,400,500,700',
        ],
      },
    },
  ],
}
