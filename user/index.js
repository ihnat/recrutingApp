console.log('user index.js');

function User(name) {
    this.name = name;
};

User.prototype.say = function() {
    var text = 'Hello, my name is ' + this.name
    return text;
}


exports.User = User;