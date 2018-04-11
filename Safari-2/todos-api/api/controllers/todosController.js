'use strict';

var mySQL = require('mysql'),
    tasks = mySQL.model('Tasks');

exports.listTasks = function (req, res) {
    tasks.find({}, function(err, task){
        if (err)
            res.send(err);
        res.json(task);
        //res.write("Hello");
    });
};

exports.createTask = function (req, res){
    var newTask = tasks(req.body);
    newTask.save(function(err, task){
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.readTask = function (req, res){
    tasks.findById(req.param.taskId, function(err, task){
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.updateTask = function (req, res){
    tasks.findOneAndUpdate({_id: req.param.taskId}, req.body, {new: true}, function (err, task){
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.deleteTask = function(req, res){
    tasks.remove({_id: req.para.taskId}, function (err, task){
        if (err)
            res.send(err);
        res.json({message: 'Task Deleted'});
    });
};