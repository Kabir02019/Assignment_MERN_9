const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const User = require("./db/dbSchema");
const cors = require("cors");

//middleware for parsing jason

app.use(bodyParser.json()); 
app.use(cors());

mongoose.connect("mongodb://localhost:27017/firstdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("DB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to DB");


  app.post("/user/create", (req, res) => {
    const { fullName, email, password } = req.body;


    const fullNameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!fullName || !password || !email) {
      return res.status(400).json({ error: "Full name, email, and password are required." });
    }

    if (!fullNameRegex.test(fullName)) {
      return res.status(400).json({ error: "full name format is invalid" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "email format is invalid" });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: "Password does not meet the set requirements" });
    }


    User.findOne({ email })
      .then((user) => {
        if (user) {
          return res.status(400).json({ error: "Email is already being used" });
        }


        const newUser = new User({ fullName, email, password });

        newUser.save()
          .then(() => {
            res.status(201).json({ message: "User created successfully." });
          })
          .catch((err) => {
            res.status(500).json({ error: "User cannot be created" });
          });
      })
      .catch((err) => {
        res.status(500).json({ error: "error Database" });
      });
  });

  app.put("/user/edit", (req, res) => {
    const { fullName, password, email } = req.body;

  

    const errors = [];
  
    const fullNameRegex = /^[A-Za-z\s]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!fullNameRegex.test(fullName)) {
      errors.push("Invalid full name format.");
    }
  
    if (!password) {
      errors.push("Password is required.");
    } else if (!passwordRegex.test(password)) {
      errors.push("Password does not meet the set requirements");
    }
  
    if (errors.length > 0) {
      // Return all validation errors
      return res.status(400).json({ errors });
    }
  
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found." });
        }
  
        user.fullName = fullName;
        user.password = password;
  
        user.save()
          .then(() => {
            res.status(200).json({ message: "User updated successfully." });
          })
          .catch((err) => {
            res.status(500).json({ error: "Error updating user." });
          });
      })
      .catch((err) => {
        res.status(500).json({ error: "Database error." });
      });
  });
  


  app.delete("/user/delete", (req, res) => {
    const userEmail = req.body.email;


    User.findOneAndDelete({ email: userEmail })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found." });
        }

        res.status(200).json({ message: "User deleted successfully." });
      })
      .catch((err) => {
        res.status(500).json({ error: "Database error." });
      });
  });


  app.get("/user/getAll", (req, res) => {
    User.find({}, "fullName email")
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(500).json({ error: "Database error." });
      });
  });


  app.post('/user/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
      }
  
      res.status(200).json({ message: "Login successful" });
    } catch (err) {
      res.status(500).json({ error: "Login Failed" });

    }
  });
  

  app.listen(3000, () => {
    console.log("Server started");
  });


});