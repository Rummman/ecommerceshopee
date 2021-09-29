import styled from "styled-components";
import products from "../data";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addItem, getCart } from "../utils/cart";

const Product = (props) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // console.log(product);
  // console.log(id);

  const [amount, setAmount] = useState(1);

  const handleInc = () => {
    setAmount(amount + 1);
  };

  const handleDec = () => {
    setAmount(amount - 1);
  };

  const handleAddCart = () => {
    addItem({ id: product.id, amount: amount });
  };

  return (
    <Container>
      <Wrapper>
        <Image src={product.img} />
        <Info>
          <Title>{product.title}</Title>
          <Details>{product.details}</Details>
          <Price>{product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={handleDec}
                disabled={amount === 1 ? true : false}
              >-</Remove>
              <Amount>{amount}</Amount>
              <Add onClick={handleInc}>+</Add>
              <Button onClick={handleAddCart}>Add to cart</Button>
            </AmountContainer>
          </AddContainer>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Product;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 480px;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1``;
const Details = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 35px;
`;
const Filter = styled.div`
  margin: 20px 0;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterOption = styled.option``;
const AddContainer = styled.div`
  padding-top: 50px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid navy;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  border: none;
  margin: 0px 50px;
  padding: 5px;
  margin-left: 5px;
  background-color: white;
  border: 2px solid teal;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #efefef;
    font-weight: 650;
  }
`;
const Remove = styled.button`
  font-size: 30px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d2d8c0;
  }
`;
const Add = styled.button`
  font-size: 30px;
  border: none;
  cursor: pointer;
  margin-right : 50px;

  &:hover {
    background-color: #d2d8c0;
  }
`;
