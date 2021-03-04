const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, "./src/scss/_main.scss")]
    }
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:3333",
        changeOrigin: true
      },
    }
  },
}
