
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');


var Schema = mongoose.Schema,
    UserSchema = new Schema({
        password: String,
        email: String,
        firstName: String,
        surName: String,
        age: Number
    });


module.exports = mongoose.model('User', UserSchema);