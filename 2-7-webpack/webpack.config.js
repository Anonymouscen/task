const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(path.resolve(__dirname))

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|jpg)$/i,
      use: [ 
        'file-loader',
        {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
        },
      }]
    }, {
      test: /\.(woff|woff2|ttf|otf|eto)/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template.html'
    })
  ]
}

module.exports = config