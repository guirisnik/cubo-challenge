const path = require('path')
const proxy = require('http-proxy-middleware')

const developMiddleware = app => {
  app.use(
    '/gateway',
    proxy.createProxyMiddleware({
      target: process.env.API_GATEWAY,
      pathRewrite: { '/gateway': '' },
      changeOrigin: true,
      secure: false,
    }),
  )
}

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
    icons: path.join(__dirname, 'src/icons'),
    mock: path.join(__dirname, 'src/mock'),
    modules: path.join(__dirname, 'src/modules'),
    pages: path.join(__dirname, 'src/pages'),
    schemas: path.join(__dirname, 'src/schemas'),
    styles: path.join(__dirname, 'src/styles'),
  },
}

const googleFontsPlugin = {
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      `Roboto`,
    ],
    display: 'swap'
  }
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
    'gatsby-plugin-netlify',
    rootImportPlugin,
    manifestPlugin,
    googleFontsPlugin,
  ],
  developMiddleware
}
