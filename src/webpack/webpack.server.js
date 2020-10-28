const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          'css-loader/locals', 'sass-loader'
        ],
      },
    ],
  },
});