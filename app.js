var connect = require("connect");
var app = connect();

var logger = function (req, res, next) {
	console.log(req.method, req.url);
	next();
};

var testing = function (req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Test Node Heroku');
};

var testing_ = function () {
	res.setHeader('Content-Type', 'text-plain');
	res.end('Test Node Heroku 2');
};

app.use(logger);
app.use('/test', testing);
app.use('/testing_',testing_);
app.listen(3000);

console.log('Server running at http:localhost:3000');
