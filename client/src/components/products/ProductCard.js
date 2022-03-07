import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={`/product/${product._id}`}
      >
        <img height="220px" width="220px" src={product.image} alt="" />

        <div className="cardText">
          <p> {product.title} </p>
          <p> {product.price} </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
