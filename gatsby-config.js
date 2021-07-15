module.exports = {
  siteMetadata: {
    title: `David Pina`,
    description: `I'm a developer with a goal of getting small businesses online. Need a website? or have a digital ideas? Let me know.`,
    author: `@jalapina`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jalapeno.png`, // This path is relative to the root of the site.        
      },
    },
  ],
}
