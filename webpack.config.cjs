const path = require('path');
const webpack = require('webpack');
require('dotenv').config()

module.exports = {
  entry: {
    'echo_test': './dist/echo_test.js',
    'join_room': './dist/join_room.js',
    'call_thru_gateway': './dist/call_thru_gateway.js',
    'call_another_agent': './dist/call_another_agent.js'
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
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.WSS_SERVER": JSON.stringify(process.env.WSS_SERVER || process.env.WS_SERVER),
      "process.env.MY_SIP_URI": JSON.stringify(process.env.MY_SIP_URI),
      "process.env.USERNAME": JSON.stringify(process.env.USERNAME),
      "process.env.SECRET": JSON.stringify(process.env.SECRET),
      "process.env.JITSI_SIP_URI": JSON.stringify(process.env.JITSI_SIP_URI),
      "process.env.DID_SIP_URI": JSON.stringify(process.env.DID_SIP_URI),
      "process.env.ASTERISK_SIP_URI": JSON.stringify(process.env.ASTERISK_SIP_URI),
      "process.env.AGENT_SIP_URI": JSON.stringify(process.env.AGENT_SIP_URI)
    })
  ]
};