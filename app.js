var express = require('express');
var jade = require('jade');
var bodyParser = require('body-parser');

var users = require('./user/index');



var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use('/user', users);



app.set('view engine', 'jade');

app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('login');
});

app.get('/index', function(req, res) {
    res.render('index');
});

app.get('/users', function (req, res) {
    var someNewUsers = ['victor', 'stepan', 'nikita'];
    res.send(generateUsers(someNewUsers));

});

app.listen( 3000, function() {
    console.log('server listen to port 3000');
});



