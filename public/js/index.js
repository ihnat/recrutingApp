$(function() {

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

    function addUsers(userList) {
        userList.forEach(function(user, i) {
            $('ul').append('<li><h3>'+ user.name + '</h3><p>' + user.firstWord + '</p></li>');
        });
    }


});