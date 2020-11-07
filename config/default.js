const readPkgUp = require('read-pkg-up')

const package = readPkgUp.sync()

module.exports = {
  package: {
    name: package.packageJson.name,
    version: '2.0.7'
  },
  mainPageUrl: 'https://kilic.dev'
}
