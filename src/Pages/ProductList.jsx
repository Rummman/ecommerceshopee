import React, { useState } from "react";
import products from "../data.js";
import ProductCard from "../components/ProductCard.jsx";
import styled from "styled-components";

export default function ProductList() {
  const [productList, setProductList] = useState(products);

  const handleDsc = () => {
    const updatedList = productList.sort((a, b) => {
      return b.price - a.price;
    });
    setProductList([...updatedList]);
  };

  const handleAsc = () => {
    const updatedList = productList.sort((a, b) => {
      return a.price - b.price;
    });
    setProductList([...updatedList]);
  };

  const handleNameAsc = () => {
    const updatedList = productList.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setProductList([...updatedList]);
  };
  const handleNameDsc = () => {
    const updatedList = productList.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
    setProductList([...updatedList]);
  };

  return (
    <Container>
      <Top>
        <Asc onClick={handleAsc}>Asc</Asc>
        <Dsc onClick={handleDsc}>Dsc</Dsc>
        <NameAsc onClick={handleNameAsc}>NameAsc</NameAsc>
        <NameDsc onClick={handleNameDsc}>NameDsc</NameDsc>
      </Top>
      {productList.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          img={product.img}
          title={product.title}
          details={product.details}
          price={product.price}
          category={product.category}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
   {
    padding-top: 50px;
    padding-left: 35px;
    display: flex;
    flex-wrap: wrap;
  }
`;
const Top = styled.div`
  height: 35px;
  width: 100%;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
`;
const Asc = styled.button`
  padding: 10px 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d2d8c0;
  }
`;
const Dsc = styled.button`
  padding: 10px 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d2d8c0;
  }
`;
const NameAsc = styled.button`
  padding: 10px 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d2d8c0;
  }
`;
const NameDsc = styled.button`
  padding: 10px 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d2d8c0;
  }
`;
