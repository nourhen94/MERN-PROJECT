const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 });
    res.send(products);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

// exports.getCategory = async (req, res) => {
//   const products = await Product.find();
//   try {
//     const category = req.params.category;
//     const pr = products.filter((el) => el.category === category);
// res.send(pr);
//   } catch (error) {
//     res.status(500).json({ errors: error.message });
//   }
// };

// exports.getSCategory = async (req, res) => {
//   const products = await Product.find();
//   try {
//     const sCategory = req.params.sCategory;
//     const Spr = products.filter((el) => el.sCategory === sCategory);
// res.send(Spr);
//   } catch (error) {
//     res.status(500).json({ errors: error.message });
//   }
// };

exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.addProducts = async (req, res) => {
  try {
    const newProduct = await new Product(req.body);
    newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send({ msg: `${deletedProduct.title} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.editProducts = async (req, res) => {
  try {
    const editedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    res.send(editedProduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
