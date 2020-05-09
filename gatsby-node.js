/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const fs = require('fs')
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

exports.onPostBuild = () => {
  fs.renameSync(
    path.join(__dirname, 'public'),
    path.join(__dirname, 'public-auto'),
  )

  fs.mkdirSync(path.join(__dirname, 'public'))

  fs.renameSync(
    path.join(__dirname, 'public-auto'),
    path.join(__dirname, 'public', 'auto-refi'),
  )
}
