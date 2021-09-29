import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCart, updateCart, deleteItem, setUpdatedCart } from "../utils/cart";
import products from "../data";
import CartItemCard from "../components/CartItemCard";

function Cart() {
  const cartList = getCart();

  const itemList = cartList.map((item) => {
    const cartProduct = products.find((product) => product.id === item.id);
    return { ...cartProduct, ...item };
  });
  const [cart, setCart] = useState([...itemList]);

  const onUpdateItem = (item) => {
    updateCart({ id: item.id, amount: item.amount });
  };

  const onRemoveItem = (id) => {
    // deleteItem(id);
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    setUpdatedCart([...cart]);
  }, [cart]);

  return (
    <Container>
      <Title>Your Cart</Title>
      <Top>
        <TopButton style={{ backgroundColor: "#E0EADA", color: "black" }}>
          Continue Shopping
        </TopButton>
        <TopButton style={{ backgroundColor: "black", color: "white" }}>
          Check Out
        </TopButton>
      </Top>

      {cart &&
        cart.map((item, index) => {
          return (
            <CartItemCard
              key={index}
              item={item}
              onUpdate={onUpdateItem}
              onRemove={onRemoveItem}
            />
          );
        })}
    </Container>
  );
}

export default Cart;

const Container = styled.div``;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  font-weight: 650;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px gray;
  }
`;
