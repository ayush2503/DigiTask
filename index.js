require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const cors = require("cors");
const productRoute = require("./src/routes/productRoute.js");
var logger = require("morgan");

const app = express();

// connect database
require("./config/database.js").connectdatabase();
app.use(logger("tiny"));

// config express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/products", productRoute);

app.listen(process.env.PORT, console.log("Listening on port 3000"));
