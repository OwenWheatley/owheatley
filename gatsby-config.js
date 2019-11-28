module.exports = {
  siteMetadata: {
    title: "Owen Wheatley - Software Developer",
    author: "Owen Wheatley",
    description: "Owen Wheatley, a software developer in the UK"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    module.exports = {
      pathPrefix: "/owenwheatley.github.io",
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
