
var router = require('express').Router(),
    controller = require('./userController');


router.post('/add', controller.addUser);

router.get('/get', controller.getUsers);

router.post('/change', controller.changeUser);

router.post('/delite', controller.deliteUser);


module.exports = router;
