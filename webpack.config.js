var webpack = require('webpack');
var assign = require('object-assign');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var filename = 'lomo';
function getConf(filename, conf) {
  var baseConf = {
    entry: './lomo.js',
    output: {
      path: path.resolve('dist/'),
      filename: filename,
      libraryTarget: 'umd'
    },
    externals:["hashmap"],
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }
      })
    ]
  };
  return assign(baseConf, conf);
}
var es5Conf = getConf(filename + '.js', {
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new BundleAnalyzerPlugin()
  ]
});
var es5MinConf = getConf(filename + '.min.js', {
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
});
module.exports = [es5Conf, es5MinConf];
