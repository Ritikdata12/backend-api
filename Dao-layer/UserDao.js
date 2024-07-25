// dao/userDao.js
const User = require('../model-layer/Model');

const createUser = (userData) => User.create(userData);
const getUserById = (userId) => User.findById(userId).where({ isDeleted: false });
const updateUser = (userId, updateData) => User.findByIdAndUpdate(userId, updateData, { new: true });
const deleteUser = (userId) => User.findByIdAndUpdate(userId, { isDeleted: true });
const listUsers = () => User.find({ isDeleted: false });

module.exports = { createUser, getUserById, updateUser, deleteUser, listUsers };
