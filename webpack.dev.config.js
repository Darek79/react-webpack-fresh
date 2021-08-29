const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {HotModuleReplacementPlugin} = require("webpack");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[id].bundle.js",
    publicPath: "/",
  },
  devtool: "cheap-source-map",
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    compress: true,
    hot: true,
    client: {
      overlay: true,
    },
  },
  plugins: [new HotModuleReplacementPlugin()],
};
