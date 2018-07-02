module.exports = {
  siteMetadata: {
    title: 'Hound – Hard Rock Music',
    author: 'Jonathan Gruber',
    description: 'Official Website of Hound - Hard Rock Music',
    siteUrl: 'https://houndband.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      // TODO: <a href="javascript:gaOptout();">Deactive Google Analytics</a>
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-121704055-1',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /images\/icons/,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
  ],
};
