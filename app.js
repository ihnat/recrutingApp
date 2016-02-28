var express = require('express');
//var jade = require('jade');
var user = require('./user/index');


var app = express();


app.set('view engine', 'jade');

app.use(express.static('public'));

function generateUsers(nameList) {
    var userList = [];
    nameList.forEach(function(name, i) {
        var hero = new user.User(name);
        hero.firstWord = hero.say();
        userList.push(hero);
    });
    return userList;
};
var list = ["ihnat","piatro","vasia","gena"]
var userList = generateUsers(list)

app.get('/', function(req, res) {
    res.render('index', {users: userList});
});

app.get('/users', function (req, res) {
    var someNewUsers = ['victor', 'stepan', 'nikita'];
    res.send(generateUsers(someNewUsers));

});

app.listen( 3000, function() {
    console.log('server listen to port 3000');
});



