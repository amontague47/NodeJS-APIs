/* var express = require('express'),
    app = express(),
    ip = process.env.ip,
    port = process.env.port || 8080,
    mySQL = require('mySQL'),
    tasks = require('./api/models/todosModel'),
    bodyParser = require('body-parser');

    mySQL.Promise = global.Promise;
    mySQL.connect('mySQL://localhost/');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    var routes = require('./api/routes/todosRoutes');
    routes(app);

    app.listen(port,ip);
    console.log('The TODO REST API server is running on IP: ' + ip + ' and Port: ' +port); */

var http = require('http');
var dateTimeFromModule = require('./mod1');
var fromQueryString = require('url');
var pullFromDB = require('./dbPull');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time: " + dateTimeFromModule.myDateTime() + "\n");
    var queryStringData = fromQueryString.parse(req.url, true).query;
    var txt = queryStringData.item + " " + queryStringData.price;
    var resultSet = pullFromDB.theseResults();
    res.write(resultSet[9] + "\n");
    res.end(txt);
}).listen(8080);
