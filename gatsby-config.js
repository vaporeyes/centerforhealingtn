module.exports = {
  siteMetadata: {
    title: "Center for Healing TN",
    author: "0x01.sh",
    description: "The Center for Healing: a trauma-informed practice"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'centerforhealingtn',
        short_name: 'centerforhealingtn',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/heart-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
