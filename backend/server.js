const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/userRoutes");

const app = express();
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
});

app.use(routes);

app.listen(3000, () => {
  console.log("Server started");
});
