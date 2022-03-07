import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../products/ProductCard";
import ProductCarousel from "../products/ProductCarousel";
import { getProducts } from "../redux/actions/productActions";
import "./one.css";
import Newsletter from "../Newsletter";
import Footer from "../footer/Footer";

const HomeOne = () => {
  const { products, loading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products);
  let latest_products = products.slice(-5);
  console.log(latest_products);

  return (
    <div>
      {/* <h1>Welcome to Matchy Shop </h1> */}
      {/* <img
        className="couv"
        src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/192000/192288-share-image.jpg"
        alt=""
      ></img> */}
      <ProductCarousel />
      <div className="one">
        <h1>Our newest products</h1>
        {loading ? (
          <h3> </h3>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              // marginTop: "2%",
              justifyContent: "space-between",
            }}
          >
            {latest_products.map((el) => (
              <ProductCard key={el._id} product={el} />
            ))}
          </div>
        )}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
export default HomeOne;
