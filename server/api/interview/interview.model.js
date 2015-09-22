'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var InterviewSchema = new Schema({
  name: String,
  candidateName: String,
  level: String,
  active: Boolean,
  questions: Array
});

module.exports = mongoose.model('Interview', InterviewSchema);
