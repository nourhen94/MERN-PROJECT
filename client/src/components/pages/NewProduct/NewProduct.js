import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProducts } from "../../redux/actions/productActions";

import "./NewProduct.css";

const NewProduct = () => {
  const { products } = useSelector((state) => state.productReducer);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [sCategory, setSCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  // registering product
  const handleAdd = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      category,
      image,
      sCategory,
      price,
      quantity,
    };
    dispatch(AddProducts(newProduct));
  };
  return (
    <div>
      <div className="form">
        <h1>new product</h1>
        <form onSubmit={handleAdd}>
          <label>setTitle</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Please fill in your full title..."
          />
          <label>category</label>
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
            placeholder="example@gmail.com..."
          />
          <label>image</label>
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
            placeholder="Please fill in your image..."
          />
          <label>sCategory</label>
          <input
            type="text"
            onChange={(e) => setSCategory(e.target.value)}
            value={sCategory}
            required
            placeholder="Please fill in your sCategory..."
          />
          <label>Price</label>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
            placeholder="Please fill in your price..."
          />
          <label>Quantity</label>
          <input
            type="text"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            required
            placeholder="Please fill in your quantity..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      )
    </div>
  );
};

export default NewProduct;
