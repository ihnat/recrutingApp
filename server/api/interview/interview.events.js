/**
 * Thing model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Interview = require('./interview.model');
var InterviewEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ThingEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Thing.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    InterviewEvents.emit(event + ':' + doc._id, doc);
    InterviewEvents.emit(event, doc);
  }
}

module.exports = InterviewEvents;
