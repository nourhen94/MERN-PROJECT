
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px;
  display: flex;
 
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 70vh;
  object-fit: cover;
  border:1px solid gray;
  &:hover{
    background-color: #f8f4f4;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 100px 60px;
   
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 25px;
  
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid gray;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const OneProduct = () => {
    const location =useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id)
    
    const [product, setProduct] = useState({})
    useEffect(() => {const getProduct= async()=>{
        const res = await axios.get("/product/get_products/"+id)
        setProduct(res.data)
        // console.log(res)

    }

      getProduct()    
      
    }, [id])
    
  return (

    <Container>
    
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
         
          <Price>{product.price}</Price>  
          <br></br>
            <Button>ADD TO CART</Button>
         
        </InfoContainer>
      </Wrapper>
    
    </Container>
  );
};

export default OneProduct;