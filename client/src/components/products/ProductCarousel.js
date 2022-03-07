import { Carousel } from "react-bootstrap";
import React from "react";
import "./carousel.css";

const ProductCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            // src="https://media.istockphoto.com/photos/two-cheerful-girls-shopping-for-clothes-picture-id670741276?k=20&m=670741276&s=170667a&w=0&h=riam0nYUC3XGwertBK4aVD69_xve8qdceYoeCCxraSE="
            src="https://sf2.bibamagazine.fr/wp-content/uploads/biba/2020/06/une-shopping.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Welcome to Matchy Shop</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            // src="https://promastore.com.au/wp-content/uploads/2022/02/shopping.jpg"
            // src="https://www.sncf-connect.com/assets/styles/ratio_4_1_max_width_1920/public/media/2019-05/shopping-entre-filles-istock-martin-dm.jpg?h=f109c8a0&itok=kqo0NZfJ"
            src="https://d19tiqumqauva7.cloudfront.net/var/andorra/storage/images/_aliases/intro_slide/www.andorra.ad/multimedia/galeria/compres/the-shopping-mile/1906x960_theshoppingmille_2/25461081-21-fre-FR/1906x960_theshoppingmille_2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Welcome to Matchy Shop</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=612x612&w=0&h=0bpyh7rdYCy3Lod5pfK9oS72zFPNJSBv7T7l64xUE90="
            // src="https://sf2.mariefrance.fr/wp-content/uploads/sites/5/2018/05/gettyimages-583665441-750x410.jpg"
            src="https://www.globalblue.com/business/images/article926851.ece/alternates/LANDSCAPE2_970/TFS_Article_2019_970x643.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Welcome to Matchy Shop</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
