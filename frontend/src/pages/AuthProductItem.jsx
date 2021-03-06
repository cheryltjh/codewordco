import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

export const Img = styled.img`
  border-radius: 80%;
  object-fit: cover;
`;

export const Button = styled.button`
  padding: 10px;
  margin: 6px 2px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  background-color: #EFBE93;
  @media only screen and (max-width: 600px) {
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    position: relative;
  }
`;

export const Button2 = styled.button`
  padding: 7px;
  margin: 6px 2px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 10px;
  background-color: #EFBE93;
  @media only screen and (max-width: 600px) {
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 10px;
    position: relative;
  }
  text-align: center;
`;

 export const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  grid-area: content;
  align-items: center;
`;

export const Content1 = styled.div`
  width: 500px;
  height: 100%;
`;

export const Container = styled.div`
  width: 500px;
`;

function AuthProductList({ userName, role }) {
  let id = useParams();
  let history = useHistory();
  // For the product data
  const [product, setProduct] = useState();

  // handle function to return user to product list page
  const productListPage = () => {
    history.push(`/products`);
  };

  // useeffect to get the products data
  useEffect(() => {
    async function getProductData() {
      await axios.get(`/api/products/${id.id}`).then((product) => {
        setProduct(product.data.data);
      });
    }
    getProductData();
  }, []);

  return (
    <>
      <div>
          <h1>{product?.name}</h1>
          <img src={product?.image} alt={product?.name} width="400px" height="400px" />
          <h4>Description:</h4>
              <p> {product?.description}</p>
              <h4>Start date:</h4>
              <p>{product?.start}</p>
              <h4>End date:</h4>
              <p> {product?.end}</p>
              <h4>Price:</h4>
              <p> {product?.price}</p>
              <h4>Seats Available:</h4>
              <p> {product?.seatsAvailable}</p>
          <button onClick={() => productListPage()}>Back</button>
      </div>
      <br />
    </>
  );
}

export default AuthProductList;
