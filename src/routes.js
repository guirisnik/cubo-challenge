const path = require('path')

module.exports = [
  {
    path: '/',
    component: path.resolve('src/pages/Participation.js'),
  },
  {
    path: 'not-found',
    component: path.resolve('src/pages/404.js'),
  },
]
