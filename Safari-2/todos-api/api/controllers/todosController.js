'use strict';

var mySQL = require('mysql'),
    tasks = mySQL.model('Tasks');

exports.listTasks = function (req, res) {
    tasks.find({}, function(err, task){
        if (err)
            res.send(err);
        res.json(task);
    });
};