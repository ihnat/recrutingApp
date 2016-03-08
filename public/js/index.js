$(function() {

    var object = {firstName: 'Ihnat', surName: 'Kryshchyk', age: 25 };
    //var sendJSON = JSON.stringify(object);

    $('#more-users').on('click', function() {

        $.ajax({
            type: 'GET',
            url: '/users',
            success: function (users) {
                addUsers(users);
            },
            error: function () {
                alert("don't work");
            }
        });
    });

    $('#add-user').on('click', function() {

        $.ajax({
            type: 'POST',
            url: '/user/add',
            data: JSON.stringify(object),
            contentType: 'application/json',
            success: function (users) {
                console.log(users);
            },
            error: function () {
                alert("don't work");
            }
        });
    });
    $('#change-user').on('click', function() {

        $.ajax({
            type: 'POST',
            url: '/user/change',
            data: JSON.stringify(object),
            contentType: 'application/json',
            success: function (users) {
                console.log('change-users');
            },
            error: function () {
                alert("don't work");
            }
        });
    });
    $('#delite-user').on('click', function() {

        $.ajax({
            type: 'POST',
            url: '/user/delite',
            data: JSON.stringify(object),
            contentType: 'application/json',
            success: function () {
                //addUsers(users);
                console.log('delite-users');
            },
            error: function () {
                alert("don't work");
            }
        });
    });

    function addUsers(userList) {
        userList.forEach(function(user, i) {
            $('ul').append('<li><h3>'+ user.name + '</h3><p>' + user.firstWord + '</p></li>');
        });
    }


});