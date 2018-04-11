var express = require('express'),
    app = express(),
    ip = process.env.ip,
    port = process.env.port || 8080;

    app.listen(port,ip);
    console.log('The TODO REST API server is running on IP: ' + ip + ' and Port: ' +port);
