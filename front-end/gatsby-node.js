/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const routes = require('./src/routes')

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  routes.forEach(route => {
    createPage({
      path: route.path,
      component: route.component,
    })
  })
}
