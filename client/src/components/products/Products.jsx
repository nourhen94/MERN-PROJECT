import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getProducts } from '../redux/actions/productActions';
import  "./products.css";

import ProductCard from './ProductCard';


const Products = () => {
  const { products, loading } = useSelector((state) => state.productReducer);
  console.log(products)
  const enfant = products.filter(el=>el.category==='enfant')
  const femme = products.filter(el=>el.category==='femme')
  const homme = products.filter(el=>el.category==='Homme')
  console.log(homme)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts  ());
  }, [dispatch]);
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div>
     {
        location.pathname==="/products/enfant/vetements" &&
        <div>
          {
            enfant.filter(product=>product.sCategory==="vetements").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }
      {
        location.pathname==="/products/enfant/chaussures" &&
        <div>
          {
            enfant.filter(product=>product.sCategory==="chaussures").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }
      {
        location.pathname==="/products/enfant/accessoires" &&
        <div>
          {
            enfant.filter(product=>product.sCategory==="accessoires").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }

{
        location.pathname==="/products/femme/vetements" &&
        <div>
          {
            femme.filter(product=>product.sCategory==="vetements").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }
      {
        location.pathname==="/products/femme/chaussures" &&
        <div>
          {
            femme.filter(product=>product.sCategory==="chaussures").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }
      {
        location.pathname==="/products/femme/accessoires" &&
        <div>
          {
            femme.filter(product=>product.sCategory==="accessoires").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }
       {
        location.pathname==="/products/homme/vetements" &&
        <div className='list'>
          {
            homme.filter(product=>product.sCategory==="Vetements").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }
      {
        location.pathname==="/products/homme/chaussures" &&
        <div>
          {
            homme.filter(product=>product.sCategory==="chaussures").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }
      {
        location.pathname==="/products/homme/accessoires" &&
        <div>
          {
            homme.filter(product=>product.sCategory==="accessoires").map(el=>
              <ProductCard key={el._id} product={el} />
              )
          }
        </div>
      }
    </div>
  )
}

export default Products