/**
 * Created by increment on 06.08.16.
 */
var webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config'),
	fs = require('fs');

var app = new (require('express'))();
const PORT = 3000;

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
});
app.get('/task', function (req, res) {
	res.send('task');
});

app.listen(PORT, function (error) {
	if(error){
		console.log(error);
	}else{
		console.info(`Listening on port ${PORT} http://localhost:${PORT}/`);
	}
});