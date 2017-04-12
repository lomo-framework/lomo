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
    process.env.NODE_ENV = 'development';

console.log("NODE_ENV:%s", process.env.NODE_ENV);

var clientConfig = {
    entry:[
        path.resolve("test/test.js")
    ],
    // entry: {
    //     main: path.resolve("src/index.js"),
    //     // "babel-polyfill":"babel-polyfill",
    //     // "react":"react"
    //     vendor: ["react", "babel-polyfill", "socket.io-client"]
    // },
    output: {
        path: path.resolve("dist"),
        filename: "[name].js?[hash:8]",
        chunkFilename: "chunk.[name].js?[chunkhash:8]"
    },
    resolve: {extensions: ['', '.js', '.json', '.less']},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: "'" + process.env.NODE_ENV + "'",
                VERSION: "'" + new Date().toLocaleString() + "'" // 加入时间戳作为版本识别
            }
        }),
        // new HTMLWebpackPlugin({
        //     filename: '../../views/prod/index.html',
        //     template: './views/tpl/index.tpl.html',
        //     chunksSortMode: 'none'
        // }),
        new HTMLWebpackPlugin({
            template: path.resolve("template/index.html"),
            // minify: {
            //     collapseWhitespace: false
            // },
            chunksSortMode: 'none'
        }),
        new CopyWebpackPlugin([
            { context:"template", from: '**/*', copyUnmodified:true, ignore: 'index.html'},
        ]),
    ],
    module: {
        loaders: [{
            test: /\.(png|jpeg|jpg|gif)$/,
            loader: 'file?name=assets/[name].[ext]?[hash:8]'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=assets/[name].[ext]?[hash:8]'
        }, {
            test: /\.(json|xml)/,
            loader: 'file?name=assets/[name].[ext]?[hash:8]'
        },{
            test: /\.(svg)$/,
            loader: 'file?name=assets/[name].[ext]?[hash:8]'
        }, {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }]
    }
};
if (process.env.NODE_ENV == "production") {
    clientConfig.module.loaders.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
    });
    // config.plugins.push(
    //     new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
    // );
}else{
    // config.devtool = "#source-map";
    clientConfig.entry.push('webpack-hot-middleware/client');
    clientConfig.module.loaders.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
    });
    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}
module.exports = [clientConfig];