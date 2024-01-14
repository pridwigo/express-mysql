const express = require('express');

const UsersControllers = require('../controllers/UsersController.js')

const router = express.Router();

router.get('/', UsersControllers.getAllUsers);

router.post('/', UsersControllers.createNewUser);

module.exports = router;