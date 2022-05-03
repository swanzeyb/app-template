const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './build/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  // in order to ignore built-in modules like path, fs, 
  target: 'node',
  // in order to ignore all modules in node_modules folder 
  // externals: [nodeExternals()],
  mode: 'production',
}
