module.exports = {
  siteMetadata: {
    title: "Bitcoin Playground",
    description: "A bitcoin playground web application",
    author: "@yaseribrahim",
    siteUrl:"https://yessur3808.github.io/bitcoin-playground/"
  },
  pathPrefix: "/bitcoin-playground",
  plugins: [
    "gatsby-plugin-sitemap",
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
          'Roboto:300,400,500,600,700',
        ],
      },
    },
  ],
}
