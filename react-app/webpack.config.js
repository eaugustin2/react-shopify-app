const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(
      __dirname,
      "../extensions/appointment-theme-extension/assets",
    ),
    filename: "react-extension.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
