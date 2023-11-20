const userService = require('../Services/userServices');

const userController = {
  async createUser(req, res) {
    try {
      const { fullName, email, password } = req.body;
      const result = await userService.createUser(fullName, email, password);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateUser(req, res) {
    try {
      const { fullName, password, email } = req.body;
      const result = await userService.updateUser(fullName, password, email);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const userEmail = req.body.email;
      const result = await userService.deleteUser(userEmail);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const result = await userService.loginUser(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = userController;
