// services/userService.js
const userDao = require('../Dao-layer/UserDao');

const createUser = (userData) => userDao.createUser(userData);
const getUserById = (userId) => userDao.getUserById(userId);
const updateUser = (userId, updateData) => userDao.updateUser(userId, updateData);
const deleteUser = (userId) => userDao.deleteUser(userId);
const listUsers = () => userDao.listUsers();

module.exports = { createUser, getUserById, updateUser, deleteUser, listUsers };
