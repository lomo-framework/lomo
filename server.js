var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = express();
var port = 3000;

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    // publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(/*require('compression')(), */express.static(path.join(__dirname, 'dist/')));
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + 'build/index.html');
// });

findPort(port);

function findPort(port) {
    if(port > 65535){
        console.error("没有找到可用的端口");
        return;
    }
    app.listen(port, function () {
        var host = this.address().address;
        var port = this.address().port;

        console.log('listening at http://%s:%s', host, port);
        console.log('process env NODE_ENV = %s', process.env.NODE_ENV);
    }).on('error', function() {
        findPort(port + 1);
    });

}