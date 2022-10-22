module.exports = {
  siteMetadata: {
    title: `Confetti - 20/10 🇻🇳`,
    description: `Chuc mung ngay phu nu Viet Nam`,
    author: `@Betty2310`,
    siteUrl: `https://betty2310.github.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `pink`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/woman.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
