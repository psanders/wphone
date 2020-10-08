const path = require('path');

module.exports = {
  entry: {
    'echo_test': './dist/echo_test.js',
    'join_room': './dist/join_room.js',
    'call_thru_gateway': './dist/call_thru_gateway.js'
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};