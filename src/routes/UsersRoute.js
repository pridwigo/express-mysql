const express = require('express');

const UsersControllers = require('../controllers/UsersController.js')

const router = express.Router();

// CREATE - POST
router.post('/', UsersControllers.createNewUser);

// READ - GET
router.get('/', UsersControllers.getAllUsers);

// UPDATE - PATCH
router.patch('/:idUser', UsersControllers.updateUser);


module.exports = router;