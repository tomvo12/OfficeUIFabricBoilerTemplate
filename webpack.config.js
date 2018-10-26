var path = require('path');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.tsx'
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  externals: [
    {
      'react': 'React'
    },
    {
      'react-dom': 'ReactDOM'
    },
    {
      'office-ui-fabric-react': 'Fabric'
    }
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        'awesome-typescript-loader'
      ],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{
        from: "./node_modules/react/umd/react.production.min.js",
        to: "libs"
      },
      {
        from: "./node_modules/react-dom/umd/react-dom.production.min.js",
        to: "libs"
      },
      {
        from: "./node_modules/es6-promise/dist/es6-promise.min.js",
        to: "libs"
      },
      {
        from: "./node_modules/office-ui-fabric-react/dist/css/fabric.min.css",
        to: "libs"
      },
      {
        from: "./node_modules/office-ui-fabric-react/dist/office-ui-fabric-react.min.js",
        to: "libs"
      },
      {
        from: "./src/img/**/*.png",
        to: "img",
        flatten: true
      }
    ])
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: false
  }
};