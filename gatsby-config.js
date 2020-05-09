const path = require('path')

const siteMetadata = {
  title: `Cubo challenge`,
  author: `Guilherme Risnik`,
}

const rootImportPlugin = {
  resolve: 'gatsby-plugin-root-import',
  options: {
    src: path.join(__dirname, 'src'),
    components: path.join(__dirname, 'src/components'),
    constants: path.join(__dirname, 'src/constants'),
    hooks: path.join(__dirname, 'src/hooks'),
    images: path.join(__dirname, 'src/images'),
    mock: path.join(__dirname, 'src/mock'),
    pages: path.join(__dirname, 'src/pages'),
    styles: path.join(__dirname, 'src/styles'),
    schemas: path.join(__dirname, 'src/schemas'),
  },
}

const manifestPlugin = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: 'Creditas',
    short_name: 'Creditas',
    start_url: '/',
    icon: 'src/images/favicon.png',
  },
}

module.exports = {
  siteMetadata,
  pathPrefix: `/cubo-challenge`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-netlify',
    `gatsby-plugin-sharp`,
    rootImportPlugin,
    manifestPlugin,
  ],
}
