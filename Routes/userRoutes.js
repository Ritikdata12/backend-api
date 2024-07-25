// routes/userRoutes.js
const express = require('express');
const userController = require('../Controllers/usercontroller');

const router = express.Router();

router.get('/', userController.listUsers);
router.get('/:userId', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
