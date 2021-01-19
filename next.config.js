const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([withImages], {
  webpack(config) {
    config.resolve.modules.push(`${__dirname}/src`)

    return config
  }
})
