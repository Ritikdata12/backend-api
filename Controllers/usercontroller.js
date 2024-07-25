// // controllers/userController.js
// const userService = require('../Service-layer/UserService');
// const userValidator = require('../validators/Uservalidator');

// const createUser = async (req, res) => {
//   try {
//     const validatedData = await userValidator.validateCreateUser(req.body);
//     const user = await userService.createUser(validatedData);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const getUserById = async (req, res) => {
//   try {
//     const user = await userService.getUserById(req.params.userId);
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const updateUser = async (req, res) => {
//   try {
//     const validatedData = await userValidator.validateUpdateUser(req.body);
//     const user = await userService.updateUser(req.params.userId, validatedData);
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const user = await userService.deleteUser(req.params.userId);
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.status(204).send();
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const listUsers = async (req, res) => {
//   try {
//     const users = await userService.listUsers();
//     res.json(users);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = { createUser, getUserById, updateUser, deleteUser, listUsers };
