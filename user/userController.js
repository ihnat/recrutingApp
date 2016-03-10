var User = require('./userModel')

var userController = {

    addUser: function(req, res) {
        var user = req.body;

        var user = new User(user);

        user.save();

        //User.findOne( function(err, existingUser) {
        //    console.log(existingUser.email);
        //    //res.json(existingUser.email);
        //});
        res.json('Good work');

    },
    getUsers: function(req, res) {

        User.find({}, function(err, users) {
            res.json(users);
        });

    },
    changeUser: function(req, res) {
        var data = req.body;
        console.log(data);
        res.json(data);
    },
    deliteUser: function(req, res) {
        var data = req.body;
        console.log(data);
        res.json(data);
    }
};


module.exports = userController;
