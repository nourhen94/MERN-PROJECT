const express = require("express");
const {
  delete_item,
  add_cart_item,
  get_cart_items,
} = require("../controllers/cart.controller");
const verifyAuth = require("../middlewares/verifyAuth");

const router = express.Router();

// fetch the items in the cart of a particular user
router.get("/get_cart/:id", verifyAuth, get_cart_items);

// add items to the user's cart
router.post("/add_cart/:id", verifyAuth, add_cart_item);

// delete a specific item from a specific user's cart
router.delete("/delete_cart/:userId/:itemId", verifyAuth, delete_item);

module.exports = router;
