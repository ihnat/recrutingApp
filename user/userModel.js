
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');


var Schema = mongoose.Schema,
    UserSchema = new Schema({
    firstName: String,
    surName: String,
    age: Number
});


exports.User = mongoose.model('User', UserSchema);