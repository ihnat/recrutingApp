var userModel = require('./userModel')

var userController = {
    addUser: function(req, res) {
        var data = req.body;
        console.log(data);
        res.json(data);
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
