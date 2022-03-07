const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const product = require("./routes/product");
const cart = require("./routes/cart");

const app = express();

app.use(express.json());
app.use("/user", user);
app.use("/product", product);
app.use("/cart", cart);

connectDB();
app.listen(5000, (err) =>
  err ? console.error(err) : console.log("server is running on port 5000")
);
