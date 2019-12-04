const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
    alias: {
      util: path.resolve(__dirname, './src/plugins/util'),
    }
  },
  module:{
    rules:[{
      // test:/\.(s*)css$/,
      // use:['style-loader', 'css-loader','sass-loader'],
      exclude: /node_modules/,
    }]
  },
  devServer: {
    //contentBase: './public',
    hot: true,
    compress: true,
    port: 8080,
    allowedHosts: ['localhost'],
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },
    overlay: true,
  },
  plugins: [
    // Ignore node_modules so CPU usage with poll
    // watching drops significantly.
    new webpack.WatchIgnorePlugin([path.join(__dirname, 'node_modules')]),
    new webpack.ProvidePlugin({ util: ['util', 'default'] }),
  ],
};

module.exports = config;