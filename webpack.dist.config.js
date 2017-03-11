var webpack = require("webpack");
var HTMLWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

// args
// var program = require('commander');
// program
//     .version('0.0.1')
//     .allowUnknownOption()
//     .option('-o, --os [value]', '平台', "default")
//     .parse(process.argv);
if (process.env.NODE_ENV == undefined)
    process.env.NODE_ENV = 'production';

console.log("NODE_ENV:%s", process.env.NODE_ENV);

var config = {
    entry: {
        main: path.resolve("src/index.js"),
    },
    externals:["object-assign"],
    output: {
        libraryTarget:"umd",
        path: path.resolve("dist"),
        filename: "lomo.js",
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: "'" + process.env.NODE_ENV + "'",
        //         VERSION: "'" + new Date().toLocaleString() + "'" // 加入时间戳作为版本识别
        //     }
        // }),
        // new HTMLWebpackPlugin({
        //     template: path.resolve("index.html"),
        //     minify: {
        //         collapseWhitespace: false
        //     },
        // }),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(png|jpeg|jpg|gif)$/,
            loader: 'file?name=assets/[name].[ext]?[hash:8]'
        }, {
            test: /\.(json|xml)/,
            loader: 'file?name=assets/[name].[ext]?[hash:8]'
        },{
            test: /\.(svg)$/,
            loader: 'file?name=assets/[name].[ext]?[hash:8]'
        }]
    },
};
if (process.env.NODE_ENV == "production") {
    // config.plugins.push(
    //     new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"
    // ));
}
module.exports = config;