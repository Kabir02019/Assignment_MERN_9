const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/user/create", userController.createUser);
router.put("/user/edit", userController.updateUser);
router.delete("/user/delete", userController.deleteUser);
router.get("/user/getAll", userController.getAllUsers);
router.post("/user/login", userController.loginUser);

module.exports = router;
