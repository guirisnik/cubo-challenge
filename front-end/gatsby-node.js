/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const routes = require('./src/routes')

const ACTIVE_ENV =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'staging'
console.log(`Using environment config: '${ACTIVE_ENV}'`) // eslint-disable-line no-console

require('dotenv').config({
  path: `.env.${ACTIVE_ENV}`,
})

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  routes.forEach(route => {
    createPage({
      path: route.path,
      component: route.component,
    })
  })
}
