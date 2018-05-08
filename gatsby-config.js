module.exports = {
  siteMetadata: {
    title: 'Alexandr Zakhozhyi',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-catch-links',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/src/data`,
              name: 'data'
          }
      },
      'gatsby-transformer-remark'
  ],
}
