import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
/* import { getCart } from "../utils/cart"; */

const Navbar = () => {
  /* useEffect(() => {
        console.log(getCart());
    },[getCart()]) */
    const history = useHistory();

    const routeChange = () => {
      let path = `/cart`;
      history.push(path);
    };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopee</Logo>
        </Center>
        <Right>
          <MenuItem> REGISTER </MenuItem>
          <MenuItem> SIGN IN </MenuItem>
          <MenuItem>
            {/*todo: cartcount needs to be added*/}
            <Badge color="primary" onClick = {routeChange}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 70px;
  background-color: #009984;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: white;
`;
const SearchContainer = styled.div`
  border: 0.5px lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  type: text;
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: white;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
`;
