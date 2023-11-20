const User = require("../models/User");
const bcrypt = require("bcrypt");

const createUser = async (fullName, email, password) => {
  const fullNameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!fullName || !password || !email) {
    throw new Error("Full name, email, and password are required.");
  }

  if (!fullNameRegex.test(fullName)) {
    throw new Error("Full name format is invalid");
  }

  if (!emailRegex.test(email)) {
    throw new Error("Email format is invalid");
  }

  if (!passwordRegex.test(password)) {
    throw new Error("Password does not meet the set requirements");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email is already being used");
  }

  const newUser = new User({ fullName, email, password });

  await newUser.save();

  return { message: "User created successfully." };
};

const updateUser = async (fullName, password, email) => {
  const fullNameRegex = /^[A-Za-z\s]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const errors = [];

  if (!fullNameRegex.test(fullName)) {
    errors.push("Invalid full name format.");
  }

  if (!password) {
    errors.push("Password is required.");
  } else if (!passwordRegex.test(password)) {
    errors.push("Password does not meet the set requirements");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found.");
  }

  user.fullName = fullName;
  user.password = password;

  await user.save();

  return { message: "User updated successfully." };
};

const deleteUser = async (userEmail) => {
  const user = await User.findOneAndDelete({ email: userEmail });

  if (!user) {
    throw new Error("User not found.");
  }

  return { message: "User deleted successfully." };
};

const getAllUsers = async () => {
  const users = await User.find({}, "fullName email");

  return users;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
    
  }

  return { message: "Login successful" };
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  loginUser,
};
