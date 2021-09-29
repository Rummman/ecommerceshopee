import { useState, useEffect } from "react";
import styled from "styled-components";
import { updateCart, deleteItem } from "../utils/cart";

const CartItemCard = (props) => {
  const {item, onUpdate, onRemove } = props
  const [amount, setAmount] = useState(parseInt(item.amount));

  const handleInc = () => {
    setAmount(amount + 1);
  };
  
  const handleDec = () => {
    setAmount(amount - 1);
  };
   useEffect(()=>{
    onUpdate({id: item.id, amount})
   },[amount])
   
   const handleChange= (e) => {
     setAmount(parseInt(e.target.value));
   }
   const handleRemove= () => {
    onRemove(item.id);
  }

   
  return (
    <Container>
      <Wrapper>
        
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={item.img} />
                <Details>
                  <ProductTitle>
                    <b>Product:</b> {item.title}
                  </ProductTitle>
                  <ProductId>
                    <b>ID: </b>{item.id}
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove
                    onClick={handleDec}
                    disabled={amount === 0 ? true : false}
                  >-</Remove>
                  <Amount onChange={handleChange} type ={"text"} value={amount}></Amount>
                  <Add onClick={handleInc}>+</Add>
                  <Button onClick={handleRemove}> Remove</Button>
                </AmountContainer>
                <ProductPrice> BDT {item.price} </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
          </Info>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartItemCard;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  padding: 10px 0px;
`;
const Image = styled.img`
  width: 200px;
  height: 100px;
  object-fit : cover;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductTitle = styled.span``;
const ProductId = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right : 200px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items : center;
`;

const Remove = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid navy;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #d2d8c0;
  }
`;
const Amount = styled.input`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid navy;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Add = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid navy;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #d2d8c0;
  }
`;
const Button= styled.button`
`;
const ProductPrice = styled.div`
    font-size : 25px;
`;
const Hr = styled.hr`
    background-color : gray;
`;

