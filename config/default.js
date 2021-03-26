const readPkgUp = require('read-pkg-up')

const package = readPkgUp.sync()

module.exports = {
  package: {
    name: package.packageJson.name,
    version: '2.2.2'
  },
  mainPageUrl: 'https://kilic.dev'
}
