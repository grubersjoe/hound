module.exports = {
  siteMetadata: {
    title: 'Hound – Hard Rock',
    author: 'Jonathan Gruber',
    description: 'Website of the Hard Rock band Hound',
    siteUrl: 'https://hound-band.com',
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      // TODO: activate
      // TODO: <a href="javascript:gaOptout();">Deactive Google Analytics</a>
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
        anonymize: true,
      },
    },
  ],
};
