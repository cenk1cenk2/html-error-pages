const readPkgUp = require('read-pkg-up')

const package = readPkgUp.sync()

module.exports = {
  package: {
    name: package.packageJson.name,
    version: package.packageJson.version
  },
  mainPageUrl: 'https://kilic.dev'
}
