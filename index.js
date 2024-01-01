require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const noteRoutes = require("./routes/noteRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

const basicAuth = require("express-basic-auth");
app.use(
  basicAuth({
    users: { admin: "pass" },
    challenge: true,
  })
);

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use("/api", noteRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
