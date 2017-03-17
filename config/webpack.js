const path = require('path');

module.exports.webpack = {
  options: {
    entry: {
      app: path.resolve(__dirname, '../test/main.js')
    }
  }
}
