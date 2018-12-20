const { upgradeLogger } = require('./utils/index')
upgradeLogger()
const injectArgvOptions = require('./config/argv').injectArgvOptions

function build (argvOptions) {
  injectArgvOptions(argvOptions)
  return require('./build/build.js')()
}

function devServer (argvOptions) {
  injectArgvOptions(argvOptions)
  return require('./build/dev-server.js')
}

exports.build = build
exports.devServer = devServer

exports.getWebpackConfig = function (argvOptions) {
  if(argvOptions) { // 向前兼容
    injectArgvOptions(argvOptions)
  }
  return require('./build/webpack.prod.conf')
}
exports.getDevWebpackConfig = function (argvOptions) {
  if(argvOptions) { // 向前兼容
    injectArgvOptions(argvOptions)
  }
  return require('./build/webpack.dev.conf')
}


