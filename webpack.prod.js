const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = (env) =>
  merge(common, {
    devServer: {
      contentBase: path.join(__dirname, "prod"),
      compress: true,
      open: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.APP_VERSION": JSON.stringify(env.APP_VERSION),
        "process.env.NODE_ENV": JSON.stringify("PROD"),
      }),
    ],
  });
