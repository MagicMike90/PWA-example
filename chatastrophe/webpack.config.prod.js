var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "static/js/[name].[hash:8].js",
    chunkFilename: "static/js/[name].[hash:8].chunk.js",
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-stage-2"
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            reduce_vars: false
          },
          output: {
            comments: false
          }
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: __dirname + "/public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),

    new ManifestPlugin({
      fileName: "asset-manifest.json"
    })
  ]
};
