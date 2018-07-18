var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todoNode');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

