import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ProductCard = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/details/` + props.id;
    history.push(path);
  };

  return (
    <Container>
      <Card onClick={routeChange}>
        <Image src={props.img} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <Price>BDT {props.price}</Price>
          <CardButton>Add To Cart</CardButton>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
`;
const Card = styled.div`
  width: 300px;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid teal;
  cursor: pointer;
  justify-content: center;

  &:hover {
    box-shadow: 2px 4px 5px gray;
  }
`;
const Image = styled.img`
  height: 15rem;
  width: 100%;
  object-fit: cover;
`;
const CardBody = styled.div`
  align-items: center;
`;
const CardTitle = styled.h2`
  padding: 1rem;
  text-align: center;
`;
const Price = styled.span`
  font-weight: 600;
  margin-left: 10px;
  fonts-size: 50px;
  padding: 5px;
`;
const CardButton = styled.button`
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  font-size: 1rem;
  border: none;
  background-color: #8af2b5;

  &:hover {
    background-color: #8fd6a7;
    color: #0e0c0f;
  }
`;
