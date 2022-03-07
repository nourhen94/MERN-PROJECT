const express = require("express");
const {
  addProducts,
  getProducts,
  deleteProducts,
  editProducts,
  getOneProduct,
} = require("../controllers/product.controller");
const verifyAuth = require("../middlewares/verifyAuth");
const roleValidation = require("../middlewares/role");
const router = express.Router();

// router.get("/get_Category", getCategory);
// router.get("/get_SCategory", getSCategory);
router.get("/get_products", getProducts);
router.get("/get_products/:id", getOneProduct);
router.post(
  "/add_products",
  verifyAuth,
  roleValidation(["Admin"]),
  addProducts
);
router.delete(
  "/delete_products/:id",
  verifyAuth,
  roleValidation(["Admin"]),
  deleteProducts
);
router.put(
  "/edit_products/:id",
  verifyAuth,
  roleValidation(["Admin"]),
  editProducts
);

module.exports = router;
